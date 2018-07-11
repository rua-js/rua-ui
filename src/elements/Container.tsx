import * as React from 'react'
import { View, StyleSheet } from 'react-native'

class Container extends React.Component<Props, never> {
  render() {
    const { children } = this.props
    return (
      <div className={'container'}>
        {children}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

interface Props {

}

export default Container
