import * as React from 'react'
import { View } from 'react-native'

class PaddedView extends React.Component<Props, never>
{

  static defaultProps = {
    xy: 0,
  }

  computePaddingStyle = () =>
  {
    const { xy, x, y, top, bottom, left, right } = this.props
    const paddingLeft = left || x || xy
    const paddingRight = right || x || xy
    const paddingTop = top || y || xy
    const paddingBottom = bottom || y || xy
    return {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    }
  }

  renderChildren = () =>
  {
    const { children } = this.props
    return React.Children.map(children, (item) =>
    {
      return item
    })
  }

  render()
  {
    const { containerStyle } = this.props
    return (
      <View style={[this.computePaddingStyle(), containerStyle]}>
        {this.renderChildren()}
      </View>
    )
  }
}

interface Props
{
  xy?: number | string
  x?: number | string
  y?: number | string
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
  containerStyle?: any
}

export default PaddedView
