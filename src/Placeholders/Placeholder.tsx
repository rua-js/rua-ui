import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'

class Placeholder extends React.Component<Props, never> {

  static defaultProps = {
    height: '100%',
    width: '100%',
    color: 'red',
  }

  render() {
    const { height, width, color } = this.props
    return (
      <View style={[{ height, width, backgroundColor: color }]} />
    )
  }
}

const styles = StyleSheet.create({
  container: {},
})

interface Props {
  height?: number
  width?: number
  color?: string
}

export default Placeholder
