import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import Placeholder from './Placeholder'

class SquarePlaceholder extends React.Component<Props, never> {

  static defaultProps = {
    color: 'red',
  }

  render() {
    const { color } = this.props
    return (
      <Placeholder
        height={'100%'}
        width={'100%'}
        color={color}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {},
})

interface Props {
  color?: string
}

export default SquarePlaceholder
