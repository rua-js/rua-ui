import * as React from 'react'
import { StyleSheet, Text as RNText, TextProps as RNTextProps, } from 'react-native'

class Text extends React.Component<TextProps, never>
{
  render()
  {
    const {
      children,
      style,
      ...restProps
    } = this.props

    return (
      <RNText
        style={[styles.textDefault, style]}
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
}

export default Text
