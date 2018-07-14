import * as React from 'react'
import {
  View as RNView,
  ViewProps as RNViewProps,
  TouchableOpacityProps,
  TouchableNativeFeedback,
} from 'react-native'

import { TouchableView } from '../internals'

/**
 *
 * @class View
 */
class View extends React.PureComponent<ViewProps, any>
{
  /**
   * This methods checks if parent elements passed onClick into View
   * NOTE: this is trying to fix Ant Design's onClick
   *
   * @returns {Function | any}
   */
  handlePress = (e) =>
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
    return onPress && onPress(e)
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
      onPress,
      onClick,
      children,
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
      return (
        <TouchableView
          {...restProps}
          onPress={(onPress || onClick) ? this.handlePress : null}
        >
          {children}
        </TouchableView>
      )
    }
    // No need wrap in Touchable
    return (
      <RNView {...restProps}>
        {children}
      </RNView>
    )
  }
}

export interface ViewProps extends RNViewProps,
  TouchableOpacityProps,
  TouchableNativeFeedback
{
  onClick?: Function

  [key: string]: any
}

export default View
