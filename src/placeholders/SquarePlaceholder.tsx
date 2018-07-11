import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import Placeholder from './Placeholder'

class SquarePlaceholder extends React.Component<Props, never> {

  static defaultProps = {
    size: 100,
    color: 'red',
  }

  render() {
    const { size, color } = this.props
    return (
      <Placeholder
        height={size}
        width={size}
        color={color}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {},
})

interface Props {
  size?: number | string
  color?: string
}

export default SquarePlaceholder
