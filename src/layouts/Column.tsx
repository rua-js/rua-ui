import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { View, ViewProps } from '../primitives'

export default function Column(props: ColumnProps)
{
  const {
    reverse,
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
    evenly,
    ...restProps
  } = props

  const viewStyle: ViewStyle = {
    flexDirection: reverse ? 'column-reverse' : 'column',
  }

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
  if (evenly) viewStyle.justifyContent = 'space-evenly'

  return (
    <View
      // @ts-ignore
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
  reverse?: boolean
  center?: boolean
  middle?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  between?: boolean
  around?: boolean
  evenly?: boolean
  style?: StyleProp<ViewStyle>
}
