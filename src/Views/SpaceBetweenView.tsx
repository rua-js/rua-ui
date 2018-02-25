import * as React from 'react'
import { StyleSheet, View } from 'react-native'

class SpaceBetweenView extends React.Component<Props, never>
{

  render(): React.ReactNode
  {
    const { containerStyle, children } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

interface Props
{
  containerStyle?: any
}

export default SpaceBetweenView
