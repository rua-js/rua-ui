import * as React from 'react'
import { View, StyleSheet } from 'react-native'

class Container extends React.Component<Props, never> {
  render() {
    const { children } = this.props
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
})

interface Props {

}

export default Container
