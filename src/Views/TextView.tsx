import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TextView extends React.Component<Props, never>
{

  static defaultProps = {
    size: 16,
    color: '#000',
    textAlign: 'left',
    backgroundColor: 'transparent'
  }

  computeContainerStyle = () =>
  {
    const { size, color, textAlign } = this.props
    return {
      color,
      textAlign,
      fontSize: size,
    }
  }

  computeTextStyle = () =>
  {
    const { height, width, align, backgroundColor } = this.props
    return {
      height,
      width,
      backgroundColor,
    }
  }

  render()
  {
    const { containerStyle, textStyle, children } = this.props
    return (
      <View style={[this.computeContainerStyle(), containerStyle]}>
        <Text style={[this.computeTextStyle(), textStyle]}>{children}</Text>
      </View>
    )
  }
}

interface Props
{
  size?: number | string
  color?: string
  textAlign?: string
  align?: string
  backgroundColor?: string
  height?: number | string
  width?: number | string
  containerStyle?: any
  textStyle?: any
  children: string
}

export default TextView
