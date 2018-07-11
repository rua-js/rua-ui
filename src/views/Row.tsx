import * as React from 'react'
import {View, ViewProps, ViewStyle} from 'react-native'

export default class Row extends React.PureComponent<RowProps, never>
{
  render()
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

    viewStyle.flexDirection = 'row'

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

    return (
      <View style={[style, viewStyle]} {...restProps}>
        {children}
      </View>
    )
  }
}

// @ts-ignore: we need to override some props from 'ViewProps' to achieve our design
export interface RowProps extends ViewProps
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
