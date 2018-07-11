import * as React from 'react'
import { StyleProp, View as RNView, ViewProps as RNViewProps, ViewStyle } from 'react-native'

import { TouchableView, TouchableViewProps } from '../internals'

/**
 *
 * @class View
 */
class View extends React.Component<ViewProps, any>
{
  /**
   * This methods checks if parent elements passed onClick into View
   * NOTE: this is trying to fix Ant Design's onClick
   *
   * @returns {Function | any}
   */
  handlePress = () =>
  {
    // object destruction
    const { onClick, onPress } = this.props

    // call onClick first
    // NOTE: onPress will be called if it's given
    if (onClick)
    {
      onClick()
    }

    // call onPress if exists, then return the result
    return onPress && onPress()
  }

  /**
   * We detect 'Press' events, and wrap them into 'TouchableView'
   *
   * @returns {JSX.Element}
   */
  render(): JSX.Element
  {
    // object destruction
    const {
      style,
      onPress,
      onClick,
      children,
      viewProps,
      touchableViewProps,
      ...restProps
    } = this.props

    // Decide if should use 'Touchable'
    const shouldWrapInTouchableComponent =
      onClick ||
      onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut

    // When need wrap in 'Touchable'
    if (!!shouldWrapInTouchableComponent)
    {
      // default props will passed to 'View', touchableViewProps will passed to 'TouchableView'
      // and viewProps will passed to 'View'
      // todo: there is a bug on other 'Press' events, we need to pass to 'TouchableView'
      return (
        <TouchableView
          {...touchableViewProps} {...restProps}
          onPress={(onPress || onClick) && this.handlePress}
        >
          <RNView style={style} {...viewProps}>
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
