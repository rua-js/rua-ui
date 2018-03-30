import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { connect } from 'react-redux'

class StaticUI extends React.Component
{
  static navigationOptions = {
    // ...R.style.header,
    headerTitle: 'Static UI',
    tabBarLabel: 'Static UI',
  }

  render()
  {
    return (
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

export default StaticUI
