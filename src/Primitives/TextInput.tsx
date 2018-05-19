import * as React from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProperties as RNTextInputProps
} from 'react-native'

class TextInput extends React.Component<TextInputProps, never>
{
  render()
  {
    const {
      style,
      ...restProps,
    } = this.props
    return (
      <RNTextInput
        underlineColorAndroid={'transparent'}
        {...restProps}
        style={[styles.textInputReset, style]}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInputReset: {
    padding: 0,
  },
})

interface TextInputProps extends RNTextInputProps
{

}
export default TextInput

export {
  TextInputProps,
}