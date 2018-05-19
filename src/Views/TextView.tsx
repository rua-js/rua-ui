import * as React from 'react'

import {
  ViewStyle as RNViewStyle,
  ViewProps as RNViewProps,
  TextStyle as RNTextStyle,
  TextProps as RNTextProps,
  StyleProp as RNStyleProp,
} from 'react-native'

import { Text, View } from '../Primitives'

class TextView extends React.Component<TextViewProps, never>
{
  static defaultProps = {
    viewStyle: {},
    textStyle: {},
  }

  render()
  {
    const {
      viewStyle,
      viewProps,
      textStyle,
      textProps,
      children
    } = this.props
    return (
      <View
        style={viewStyle}
        {...viewProps}
      >
        <Text
          style={textStyle}
          {...textProps}
        >{children}</Text>
      </View>
    )
  }
}

interface TextViewProps
{
  viewStyle?: RNStyleProp<RNViewStyle>
  viewProps?: RNViewProps
  textStyle?: RNStyleProp<RNTextStyle>
  textProps?: RNTextProps
}

export default TextView

export {
  TextViewProps,
}