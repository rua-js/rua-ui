import * as React from 'react'
import { StyleSheet, View } from 'react-native'

class SpaceBetweenView extends React.Component<Props, never>
{

  renderChildren = () =>
  {
    const { children } = this.props
    return React.Children.map(children, (item) =>
    {
      return item
    })
  }

  // Render
  render(): JSX.Element
  {
    const { containerStyle } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        {this.renderChildren()}
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
