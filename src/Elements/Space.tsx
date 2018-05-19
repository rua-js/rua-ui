import * as React from 'react'
import { View } from 'react-native'

class Space extends React.Component<Props, never>
{

  static defaultProps = {
    size: 10,
    type: 'horizontal',
  }

  render()
  {
    const { size, type } = this.props

    let style

    if (type === 'horizontal')
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
  type?: string
}

export default Space
