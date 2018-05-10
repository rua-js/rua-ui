import * as React from 'react'
import { View } from 'react-native'

const sizes = {
  xs: 3,
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
}

class Space extends React.Component<Props, never>
{

  static defaultProps = {
    size: 'md',
    direction: 'horizontal',
  }

  render()
  {
    const { size, direction } = this.props

    const translatedSize = sizes[size] || size

    let style

    if (direction === 'horizontal')
    {
      style = { height: translatedSize }
    } else
    {
      style = { width: translatedSize }
    }

    return (
      <View style={style} />
    )
  }
}

interface Props
{
  size?: string | number
  direction?: string
}

export default Space
