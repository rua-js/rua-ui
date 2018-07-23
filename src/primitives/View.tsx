import * as React from 'react'
import { View as RNView, ViewProps as RNViewProps } from 'react-native'

import { TouchableView } from '../internals'

/**
 * Enhanced View Component
 *
 * @param {ViewProps} props
 * @returns {any}
 * @constructor
 */
export default function View(props: ViewProps)
{
  const { onPress, onClick, children, ...restProps } = props

  /**
   * This methods checks if parent elements passed onClick into View
   * NOTE: this is trying to fix Ant Design's onClick
   *
   * @returns {Function | any}
   */
  function handlePress(e)
  {
    const { onPress, onClick } = props

    // call onClick first if onClick is given
    // NOTE: onPress will still be called if it's given
    if (onClick)
    {
      onClick()
    }

    // call onPress if exists, then return the result
    return onPress && onPress(e)
  }

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
        onPress={(onPress || onClick) ? handlePress : null}
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

export interface ViewProps extends RNViewProps
{
  onClick?: Function

  [key: string]: any
}
