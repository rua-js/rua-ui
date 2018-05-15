import * as React from 'react'
import { StyleSheet, View } from 'react-native'

class Border extends React.Component<Props, never>
{

  render()
  {

    // preparation
    const {
      width,
      color,
      radius,
      style,
      children,
    } = this.props

    // compute style

    const computedStyle = {
      ...style,
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

interface Props
{
  width?: number
  color?: string
  radius?: number
  style?: any
}

export default Border
