import * as React from 'react'
import { View, StyleSheet } from 'react-native'

class Border extends React.Component<Props, never>
{

  render()
  {

    // preparation
    const {
      width,
      color,
      radius,
      children,
    } = this.props

    // compute style

    const computedStyle = {
      borderWidth: width,
      borderColor: color,
      borderRadius: radius,
    }

    return (
      <View style={[styles.basic, computedStyle]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  basic: {
    borderWidth: 1,
    overflow: 'hidden',
  },
})

interface Props {
  width?: number
  color?: string
  radius?: number
}

export default Border
