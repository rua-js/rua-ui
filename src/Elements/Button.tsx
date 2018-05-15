import * as React from 'react'
import { Text, View } from '../Primitives'
import { StyleSheet } from 'react-native'

import Border from './Border'

class Button extends React.Component<Props, never>
{
  static defaultProps = {
    type: 'normal',
  }

  render()
  {
    // Preparation
    const {
      height,
      width,
      color,
      radius,
      rounded,
      backgroundColor,
      textColor,
      borderColor,
      borderWidth,
      type,
      fluid,
      children,
    } = this.props

    // Compute height
    const computedHeight = height || 40

    // Compute width
    let computedWidth = width
    if (fluid)
    {
      computedWidth = '100%'
    }

    // Compute color
    const colorTypes = {
      normal: textColor || '#fff',
      outline: textColor || color || '#ed393a',
    }

    const backgroundColorTypes = {
      normal: backgroundColor || color || '#ed393a',
      outline: backgroundColor || '#fff',
    }

    const computedColor: string = colorTypes[type]
    const computedBackgroundColor: string = backgroundColorTypes[type]

    // Compute radius
    let computedRadius: number = radius || 0
    if (rounded)
    {
      computedRadius = computedHeight as number / 2
    }

    // Compute styles
    const computedBorderWidth = borderWidth || 1
    const computedBorderColor = color || borderColor || '#ed393a'

    return (
      <Border width={computedBorderWidth} color={computedBorderColor} radius={computedRadius}>
        <View
          style={styles.inner}
          backgroundColor={computedBackgroundColor}
          width={computedWidth}
          height={computedHeight}
        >
          <Text color={computedColor}>{children}</Text>
        </View>
      </Border>
    )
  }
}

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {},
})

interface Props
{
  // Type
  type?: 'normal' | 'outline'
  // Special case
  rounded?: boolean
  fluid?: boolean
  // Style
  height?: number | string
  width?: number | string
  radius?: number
  color?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  borderWidth?: number
  // React
  children?: React.ReactNode
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
}

export default Button
