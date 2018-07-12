import * as React from 'react'
import { View, StyleSheet } from 'react-native'

class Container extends React.PureComponent<ContainerProps, never> {
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

export interface ContainerProps
{

}

export default Container
