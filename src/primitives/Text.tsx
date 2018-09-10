import * as React from 'react'
import { StyleSheet, Text as RNText, TextProps as RNTextProps } from 'react-native'

export default function Text(props: TextProps)
{
  const {
    // @ts-ignore
    children,
    style,
    size = 14,
    color = '#1b1b1b',
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
      style={[computedStyle].concat(style as any)}
      {...restProps}
    >
      {children}
    </RNText>
  )
}

const styles = StyleSheet.create({})

export interface TextProps extends RNTextProps
{
  color?: string
  size?: number
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  family?: string
  lineHeight?: number
  children?: JSX.Element | JSX.Element[] | string | number | any
}
