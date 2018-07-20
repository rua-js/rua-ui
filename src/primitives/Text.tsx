import * as React from 'react'
import { StyleSheet, Text as RNText, TextProps as RNTextProps, } from 'react-native'

class Text extends React.PureComponent<TextProps, never>
{
  render()
  {
    const {
      children,
      style,
      size,
      color,
      weight,
      family,
      lineHeight,
      ...restProps
    } = this.props

    const computedStyle = {
      color,
      lineHeight,
      fontSize: size,
      fontWeight: weight,
      fontFamily: family,
    }

    return (
      <RNText
        style={[styles.textDefault, computedStyle, style]}
        {...restProps}
      >
        {children}
      </RNText>
    )
  }
}

const styles = StyleSheet.create({
  textDefault: {
    color: '#1b1b1b',
  },
})

export interface TextProps extends RNTextProps
{
  color?: string
  size?: number
  weight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
  family?: string
  lineHeight?: number
}

export default Text
