import * as React from 'react'
import { ViewStyle, StyleProp } from 'react-native'
import { View, ViewProps } from '../primitives'

export default function Center(props: CenterProps)
{
  const { children } = props

  const viewStyle: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <View style={viewStyle}>
      {children}
    </View>
  )
}

export interface CenterProps extends ViewProps
{

}
