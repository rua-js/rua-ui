import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { actions } from 'rua'

class Example1 extends React.Component<Props, never>
{
  render()
  {
    return (
      <View style={styles.container}>
        <Text>Component: Example1</Text>
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

export default Example1
