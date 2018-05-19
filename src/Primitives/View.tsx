import * as React from 'react'
import { StyleProp, View as RNView, ViewProps as RNViewProps, ViewStyle, } from 'react-native'

import { TouchableView, TouchableViewProps } from '../Internals'

class View extends React.Component<ViewProps, any>
{
  /**
   * This methods checks if parent elements passed onClick into View
   *
   * @returns {Function | any}
   */
  handlePress = () =>
  {
    const { onClick, onPress } = this.props
    if (onClick)
    {
      onClick()
    }
    return onPress && onPress()
  }

  render()
  {
    let {
      style,
      onPress,
      onClick,
      children,
      viewProps,
      touchableViewProps,
      ...restProps
    } = this.props

    // Decide if should use Touchable
    const shouldWrapInTouchableComponent =
      onClick ||
      onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut

    if (!!shouldWrapInTouchableComponent) // Need wrap in Touchable
    {
      return (
        <TouchableView
          {...touchableViewProps}
          onPress={(onPress || onClick) && this.handlePress}
        >
          <RNView style={style} {...viewProps} {...restProps}>
            {children}
          </RNView>
        </TouchableView>
      )
    } else // No need wrap in Touchable
    {
      return (
        <RNView style={style} {...viewProps} {...restProps}>
          {children}
        </RNView>
      )
    }
  }
}


export interface ViewProps extends RNViewProps
{
  style?: StyleProp<ViewStyle>
  touchableViewStyle?: TouchableViewProps
  children?: React.ReactNode
  viewProps?: RNViewProps
  touchableViewProps?: TouchableViewProps
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
  onClick?: Function
}

export default View
