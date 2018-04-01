import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { actions } from 'rua'
import { Example1, Example2 } from '../components/Example'

class Example extends React.Component<any, any>
{
  static navigationOptions = {
    // ...R.style.header,
    headerTitle: 'Example',
  }

  render()
  {
    return (
      <View>
        <Text>Example</Text>
        <Example1/>
        <Example2/>
      </View>
    )
  }
}

export default Example
