import * as React from 'react'
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageStyle as RNImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle as RNViewStyle,
} from 'react-native'
import { View, ViewProps } from '../primitives'

class ImageView extends React.PureComponent<ImageViewProps, any>
{
  render()
  {
    const {
      containerViewProps,
      containerViewStyle,
      imageProps,
      imageStyle,
      ...restProps
    } = this.props

    return (
      <View
        {...containerViewProps}
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
  containerViewProps?: ViewProps
  containerViewStyle?: StyleProp<RNViewStyle>
  imageProps?: RNImageProps
  imageStyle?: StyleProp<RNImageStyle>
}

export default ImageView
