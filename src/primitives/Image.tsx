import * as React from 'react'
import { Image as RNImage, ImageBackground, ImageProps as RNImageProps } from 'react-native'
import { utils } from '../shared'

const { shouldUseTouchable } = utils
/**
 * React Native Image that supports touch event, wrap content inside and other enhancement
 *
 * @class Image
 */
export default class Image extends React.PureComponent<ImageProps, never>
{
  /**
   * This methods checks if parent elements passed onClick into View
   * NOTE: this is trying to fix Ant Design's onClick
   *
   * @returns {Function | any}
   */
  handlePress = () =>
  {
    // object destruction
    const { onClick, onPress } = this.props

    // call onClick first
    // NOTE: onPress will be called if it's given
    if (onClick)
    {
      onClick()
    }

    // call onPress if exists, then return the result
    return onPress && onPress()
  }

  render()
  {
    const { children, style, size, ...restProps } = this.props

    const useTouchable = shouldUseTouchable(this.props)

    // fix hint error
    const imageStyle: any = {}

    // support 'size' property
    if (size)
    {
      imageStyle.height = size
      imageStyle.width = size
    }

    if (children)
    {
      if (useTouchable)
      {
        return (
          <ImageBackground
            style={[imageStyle].concat(style)}
            {...restProps}
          >
            {children}
          </ImageBackground>
        )
      }

      return (
        <ImageBackground
          style={[imageStyle].concat(style)}
          {...restProps}
        >
          {children}
        </ImageBackground>
      )
    }

    if (useTouchable)
    {
      return (
        <RNImage
          style={[imageStyle].concat(style)}
          {...this.props}
        />
      )
    }

    return (
      <RNImage
        style={[imageStyle].concat(style)}
        {...this.props}
      />
    )
  }
}

export interface ImageProps extends RNImageProps
{
  children?: JSX.Element | JSX.Element[]
  size?: number | string
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
  onClick?: Function
}