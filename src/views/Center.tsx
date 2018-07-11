import * as React from 'react'
import { ViewStyle } from 'react-native'
import { View } from '../primitives'

export default class Center extends React.PureComponent<CenterProps, any>
{
  render()
  {
    const { children } = this.props

    const viewStyle: ViewStyle = {
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
}

export interface CenterProps
{

}
