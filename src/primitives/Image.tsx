import * as React from 'react'
import { Image as RNImage, ImageProps as RNImageProps, ViewStyle } from 'react-native'
import { default as View, ViewProps } from './View'
import { utils } from '../shared'

export default class Image extends React.PureComponent<ImageProps, any>
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
    // const { wi } = this.props
    //
    // if ()
    return (
      <View>
        <RNImage
          {...this.props}
        />
      </View>
    )
  }
}

export interface ImageProps extends RNImageProps
{
  touchableStyle?: ViewStyle
  touchableProps?: ViewProps
  children?: JSX.Element | JSX.Element[]

  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
  onClick?: Function
}