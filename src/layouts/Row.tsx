import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { View, ViewProps } from '../primitives'

export default function Row(props: RowProps)
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
    flexDirection: reverse ? 'row-reverse' : 'row',
  }

  // horizontal
  if (left) viewStyle.justifyContent = 'flex-start'
  if (center) viewStyle.justifyContent = 'center'
  if (right) viewStyle.justifyContent = 'flex-end'

  // vertical
  if (top) viewStyle.alignItems = 'flex-start'
  if (middle) viewStyle.alignItems = 'center'
  if (bottom) viewStyle.alignItems = 'flex-end'

  // main axis
  if (between) viewStyle.justifyContent = 'space-between'
  if (around) viewStyle.justifyContent = 'space-around'
  if (evenly) viewStyle.justifyContent = 'space-evenly'

  return (
    // @ts-ignore
    <View style={[viewStyle].concat(style)} {...restProps}>
      {children}
    </View>
  )
}

// @ts-ignore: we need to override some props from 'ViewProps' to achieve our design
export interface RowProps extends ViewProps
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
