import * as React from 'react'
import { View } from 'react-native'

class Space extends React.Component<Props, never>
{

  static defaultProps = {
    size: 'md',
    direction: 'horizontal',
  }

  render()
  {
    const { size, direction } = this.props

    let style

    if (direction === 'horizontal')
    {
      style = { height: size }
    } else
    {
      style = { width: size }
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
