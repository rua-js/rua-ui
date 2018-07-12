import * as React from 'react'

import {
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
  StyleProp as RNStyleProp,
} from 'react-native'

import { Text, View, TextProps, ViewProps } from '../primitives'

class TextView extends React.PureComponent<TextViewProps, never>
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

export interface TextViewProps
{
  viewStyle?: RNStyleProp<RNViewStyle>
  viewProps?: ViewProps
  textStyle?: RNStyleProp<RNTextStyle>
  textProps?: TextProps
}

export default TextView