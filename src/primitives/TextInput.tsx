import * as React from 'react'
import { StyleSheet, TextInput as RNTextInput, TextProps as RNTextProps, } from 'react-native'

class TextInput extends React.Component<TextInputProps, never>
{
  render()
  {
    const {
      style,
      ...restProps
    } = this.props

    return (
      <RNTextInput
        underlineColorAndroid={'transparent'}
        style={[styles.textInputDefault, style]}
        {...restProps}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInputDefault: {
    padding: 0,
  },
})

export interface TextInputProps extends RNTextProps
{
}

export default TextInput
