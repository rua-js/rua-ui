import * as React from 'react'
import { View } from 'react-native'

class PaddedView extends React.Component<Props, never> {

  static defaultProps = {
    all: 0,
  }

  computePaddingStyle = () => {
    const { all, x, y, top, bottom, left, right } = this.props
    const paddingLeft = left || x || all
    const paddingRight = right || x || all
    const paddingTop = top || y || all
    const paddingBottom = bottom || y || all
    return {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    }
  }

  renderChildren = () => {
    const { children } = this.props
    return React.Children.map(children,(item) => {
      return item
    })
  }

  render() {
    return (
      <View style={this.computePaddingStyle()}>
    {this.renderChildren()}
    </View>
  )
  }
}

interface Props {
  all?: number | string
  x?: number | string
  y?: number | string
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

export default PaddedView
