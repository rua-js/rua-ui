import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { actions } from 'rua-dva'
import { colors } from '../Configs'

class Divider extends React.Component<DividerProps, never> {

  static defaultProps = {
    color: colors.border,
    type: 'horizontal'
  }

  computeStyle = () => {
    const { color, type } = this.props
    if (type === 'horizontal') {
      return {
        borderBottomColor: color,
      }
    }
    return {
      borderRightColor: color,
    }
  }

  render() {
    const { type } = this.props
    const style = styles[type]
    return (
      <View style={[style, this.computeStyle()]} />
    )
  }
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    borderBottomWidth: 1,
  },
  vertical: {
    height: '100%',
    borderRightWidth: 1,
  },
})

interface DividerProps {
  type?: 'horizontal' | 'vertical'
  color?: string
}

export default Divider
