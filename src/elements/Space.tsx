import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { ViewProps } from '../primitives'

class Space extends React.PureComponent<SpaceProps, never>
{

  static defaultProps = {
    size: 10,
    color: 'transparent'
  }

  render()
  {
    const {
      size,
      color,
      vertical,
      spaceStyle,
      spaceProps,
      containerStyle,
      containerProps,
    } = this.props

    let innerStyle: ViewStyle

    if (vertical)
    {
      innerStyle = { width: size, backgroundColor: color, ...spaceStyle }
    } else
    {
      innerStyle = { height: size, backgroundColor: color, ...spaceStyle }
    }

    return (
      <View style={innerStyle} {...spaceProps} />
    )
  }
}

export interface SpaceProps
{
  size?: string | number
  color?: string
  vertical?: boolean
  spaceStyle?: ViewStyle
  spaceProps?: ViewProps
  containerStyle?: ViewStyle
  containerProps?: ViewProps
}

export default Space
