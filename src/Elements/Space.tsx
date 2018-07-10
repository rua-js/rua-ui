import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { ViewProps } from '../Primitives'

class Space extends React.Component<SpaceProps, never>
{

  static defaultProps = {
    size: 10,
  }

  render()
  {
    const {
      size,
      vertical,
      spaceStyle,
      spaceProps,
      containerStyle,
      containerProps,
    } = this.props

    let innerStyle: ViewStyle

    if (vertical)
    {
      innerStyle = { width: size, ...spaceStyle }
    } else
    {
      innerStyle = { height: size, ...spaceStyle }
    }

    return (
      <View style={innerStyle} {...spaceProps} />
    )
  }
}

export interface SpaceProps
{
  size?: string | number
  vertical?: boolean
  spaceStyle?: ViewStyle
  spaceProps?: ViewProps
  containerStyle?: ViewStyle
  containerProps?: ViewProps
}

export default Space
