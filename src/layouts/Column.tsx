import * as React from 'react'
import { ViewStyle } from 'react-native'
import { View, ViewProps } from '../primitives'

export default function Column(props: ColumnProps)
{
  const {
    center,
    middle,
    children,
    style,
    left,
    right,
    top,
    bottom,
    between,
    around,
    ...restProps
  } = this.props

  const viewStyle: ViewStyle = {}

  // horizontal
  if (left) viewStyle.alignItems = 'flex-start'
  if (center) viewStyle.alignItems = 'center'
  if (right) viewStyle.alignItems = 'flex-end'

  // vertical
  if (top) viewStyle.justifyContent = 'flex-start'
  if (middle) viewStyle.justifyContent = 'center'
  if (bottom) viewStyle.justifyContent = 'flex-end'

  // main axis
  if (between) viewStyle.justifyContent = 'space-between'
  if (around) viewStyle.justifyContent = 'space-around'

  return (
    <View
      style={[viewStyle].concat(style)}
      {...restProps}
    >
      {children}
    </View>
  )
}

// @ts-ignore: we need to override some props from 'ViewProps' to achieve our design
export interface ColumnProps extends ViewProps
{
  center?: boolean
  middle?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  between?: boolean
  around?: boolean
  style?: ViewStyle
}
