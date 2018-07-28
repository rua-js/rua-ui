import * as React from 'react'
import { View as RNView, ViewProps as RNViewProps, ViewStyle, StyleProp } from 'react-native'

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
  const { onPress, onClick, fill, fluid, style, children, ...restProps } = props
  /**
   * This methods checks if parent elements passed onClick into View
   * NOTE: this is trying to fix Ant Design's onClick
   *
   * @returns {Function | any}
   */
  function handlePress(e)
  {
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

  // Apply fluid and fill style
  const viewStyle: StyleProp<ViewStyle> = {}

  if (fill)
  {
    viewStyle.height = '100%'
    viewStyle.width = '100%'
  }

  if (fluid)
  {
    viewStyle.flex = 1
  }

  const mergedStyles = [viewStyle].concat(style as any)

  // When need wrap in 'Touchable'
  if (!!shouldWrapInTouchableComponent)
  {
    // default props will passed to 'View', touchableViewProps will passed to 'TouchableView'
    // and viewProps will passed to 'View'
    return (
      <TouchableView
        style={mergedStyles}
        onPress={(onPress || onClick) ? handlePress : null}
        {...restProps}
      >
        {children}
      </TouchableView>
    )
  }
  // No need wrap in Touchable
  return (
    <RNView
      style={mergedStyles}
      {...restProps}
    >
      {children}
    </RNView>
  )
}

export interface ViewProps extends RNViewProps
{
  onClick?: Function

  fill?: boolean

  fluid?: boolean

  [key: string]: any
}
