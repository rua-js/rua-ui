import * as React from 'react'
import { Text, View } from 'react-native'

class Button extends React.Component<Props, never>
{
  render()
  {
    return (
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

interface Props
{
  active?: boolean
  preset?: string
  className?: string
  circular?: boolean
  color?: string
  fluid?: boolean
  loading?: boolean
  onPress?: Function
}

export default Button
