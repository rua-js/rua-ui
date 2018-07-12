import * as React from 'react'
import {
  StyleProp,
  TextProps as RNTextProps,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native'
import { TextInput, View, ViewProps } from '../primitives'

class TextInputView extends React.PureComponent<TextInputViewProps, never>
{
  render()
  {
    const {
      containerViewStyle,
      containerViewProps,
      textInputStyle,
      textInputProps,
    } = this.props
    return (
      <View
        style={containerViewStyle}
        {...containerViewProps}
      >
        <TextInput
          style={textInputStyle}
          {...textInputProps}
        />
      </View>
    )
  }
}

export interface TextInputViewProps
{
  containerViewStyle?: StyleProp<RNViewStyle>
  containerViewProps?: ViewProps
  textInputStyle?: StyleProp<RNTextStyle>
  textInputProps?: RNTextProps
}

export default TextInputView