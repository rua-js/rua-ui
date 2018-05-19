import * as React from 'react'
import {
  Image as RNImage,
  ImageProperties as RNImageProps,
  ImageStyle as RNImageStyle,
  ViewProperties as RNViewProps,
  ViewStyle as RNViewStyle,
  StyleProp,
} from 'react-native'
import { View } from '../Primitives'

export default class Image extends React.Component<ImageProps, any>
{
  render()
  {
    const {
      containerProps,
      containerViewStyle,
      imageProps,
      imageStyle,
      ...restProps
    } = this.props

    return (
      <View
        {...containerProps}
        style={containerViewStyle}
      >
        <RNImage
          {...imageProps}
          style={imageStyle}
          {...restProps}
        />
      </View>
    )
  }
}

export interface ImageProps
{
  containerProps?: RNViewProps
  containerViewStyle?: StyleProp<RNViewStyle>
  imageProps?: RNImageProps
  imageStyle?: StyleProp<RNViewStyle>
}
