import * as React from 'react'
import { Text, View } from '../Primitives'

export default class TextView extends React.Component<TextViewProps, never>
{
  static defaultProps = {
    viewStyle: {},
    textStyle: {},
  }

  render()
  {
    const {
      viewStyle,
      textStyle,
      children
    } = this.props
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>
    )
  }
}

export interface TextViewProps
{
  viewStyle: any
  textStyle: any
}
