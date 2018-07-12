import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, ViewProps } from '../primitives'

export default class Fluid extends React.PureComponent<FluidProps, any>
{
  render()
  {
    const { children, ...restProps } = this.props

    return (
      <View
        style={styles.container}
        {...restProps}
      >
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface FluidProps extends ViewProps {}
