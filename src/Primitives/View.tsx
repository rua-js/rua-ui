import * as React from 'react'
import { View as RNView } from 'react-native'

class View extends React.Component<Props, never>
{
  render()
  {
    const { children } = this.props
    return (
      <RNView style={[]}>
        {children}
      </RNView>
    )
  }
}


interface Props
{
  children?: React.ReactNode
}

export default View
