import * as React from 'react'

import {
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
  StyleProp as RNStyleProp,
} from 'react-native'

import { Text, View, TextProps, ViewProps } from '../primitives'

class TextView extends React.PureComponent<TextViewProps, never>
{
  render()
  {
    const {
      viewStyle,
      viewProps,
      textStyle,
      textProps,
      children,
      ...restProps
    } = this.props
    return (
      <View
        style={viewStyle}
        {...viewProps}
        {...restProps}
      >
        <Text
          style={textStyle}
          {...textProps}
        >{children}</Text>
      </View>
    )
  }
}

export interface TextViewProps extends ViewProps
{
  viewStyle?: RNStyleProp<RNViewStyle>
  viewProps?: ViewProps
  textStyle?: RNStyleProp<RNTextStyle>
  textProps?: TextProps
}

export default TextView