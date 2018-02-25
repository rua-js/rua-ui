import * as React from 'react'
import { View } from 'react-native'

class PaddedView extends React.Component<Props, never>
{

  static defaultProps = {
    xy: 0,
  }

  computeMarginStyle = () =>
  {
    const { xy, x, y, top, bottom, left, right } = this.props
    const marginLeft = left || x || xy
    const marginRight = right || x || xy
    const marginTop = top || y || xy
    const marginBottom = bottom || y || xy
    return {
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
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
      <View style={[this.computeMarginStyle(), containerStyle]}>
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
