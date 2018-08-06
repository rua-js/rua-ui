import * as React from 'react'
import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps, } from 'react-native'

class TextInput extends React.PureComponent<TextInputProps, never>
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

export interface TextInputProps extends RNTextInputProps
{
}

export default TextInput
