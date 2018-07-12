import * as React from 'react'
import { StyleSheet, View } from 'react-native'

export default class Placeholder extends React.PureComponent<PlaceholderProps, never>
{

  static defaultProps = {
    color: 'red',
    size: 100,
  }

  render()
  {
    const { height, width, color, size } = this.props

    const $height = height || size
    const $width = width || size

    return (
      <View
        style={{
          height: $height,
          width: $width,
          backgroundColor: color
        }}
      />
    )
  }
}

export interface PlaceholderProps
{
  height?: number | string

  width?: number | string

  color?: string

  size?: number
}