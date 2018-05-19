import * as React from 'react'
import {
  Image as RNImage,
  ImageProperties as RNImageProps,
  ImageStyle as RNImageStyle,
  ViewProperties as RNViewProps,
  ViewStyle as RNViewStyle,
  StyleProp,
  StyleSheet,
} from 'react-native'
import { View } from '../Primitives'

export default class ImageView extends React.Component<ImageViewProps, any>
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
          style={[imageStyle, styles.imageDefault]}
          {...restProps}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageDefault: {
    width: '100%',
    height: '100%',
  },
})

export interface ImageViewProps
{
  style?: StyleProp<RNImageStyle>
  containerProps?: RNViewProps
  containerViewStyle?: StyleProp<RNViewStyle>
  imageProps?: RNImageProps
  imageStyle?: StyleProp<RNViewStyle>
}
