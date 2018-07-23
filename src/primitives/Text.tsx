import * as React from 'react'
import { StyleSheet, Text as RNText, TextProps as RNTextProps } from 'react-native'

export default function Text(props: TextProps)
{
  const {
    // @ts-ignore
    children,
    style,
    size,
    color,
    weight,
    family,
    lineHeight,
    ...restProps
  } = props

  const computedStyle = {
    color,
    lineHeight: lineHeight || size && size * 1.2,
    fontSize: size,
    fontWeight: weight,
    fontFamily: family,
  }

  return (
    <RNText
      style={[styles.textDefault, computedStyle].concat(style as any)}
      {...restProps}
    >
      {children}
    </RNText>
  )
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
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  family?: string
  lineHeight?: number
}
