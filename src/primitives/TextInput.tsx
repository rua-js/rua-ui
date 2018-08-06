import * as React from 'react'
import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native'

function TextInput(props: TextInputProps)
{
  const {
    style,
    ...restProps
  } = props

  return (
    <RNTextInput
      underlineColorAndroid={'transparent'}
      style={[styles.textInputDefault, style]}
      {...restProps}
    />
  )
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
