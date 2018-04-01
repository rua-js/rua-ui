import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { actions } from 'rua-dva'

class Example2 extends React.Component<Props, never>
{
  render()
  {
    return (
      <View style={styles.container}>
        <Text>Component: Example2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
})

interface Props
{

}

export default Example2
