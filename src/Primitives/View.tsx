import * as React from 'react'
import {
  StyleProp,
  View as RNView,
  ViewStyle,
} from 'react-native'

import TouchableView from '../Internals/TouchableView'

class View extends React.Component<ViewProps, any>
{
  /**
   * This methods checks if parent elements passed onClick into View
   *
   * @returns {Function | any}
   */
  handlePress = () => {
    const { onClick, onPress } = this.props
    if (onClick) {
      onClick()
    }
    return onPress && onPress()
  }

  render()
  {
    let {
      style,
      direction,
      wrap,
      justify,
      align,
      flex,
      height,
      width,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingX,
      paddingY,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      marginX,
      marginY,
      backgroundColor,
      onPress,
      onClick,
      children,
      ...restProps
    } = this.props

    let transferConst = [justify, align]

    transferConst = transferConst.map(el =>
    {
      let tempTxt

      switch (el)
      {
        case 'start':
          tempTxt = 'flex-start'
          break
        case 'end':
          tempTxt = 'flex-end'
          break
        case 'between':
          tempTxt = 'space-between'
          break
        case 'around':
          tempTxt = 'space-around'
          break
        default:
          tempTxt = el
          break
      }

      return tempTxt
    })

    const viewStyle = {
      flex,
      height,
      width,
      flexDirection: direction,
      flexWrap: wrap,
      backgroundColor,
      justifyContent: transferConst[0],
      alignItems: transferConst[1],
      paddingLeft: paddingLeft || paddingX || padding,
      paddingRight: paddingRight || paddingX || padding,
      paddingTop: paddingTop || paddingY || padding,
      paddingBottom: paddingBottom || paddingY || padding,
      marginLeft: marginLeft || marginX || margin,
      marginRight: marginRight || marginX || margin,
      marginTop: marginTop || marginY || margin,
      marginBottom: marginBottom || marginY || margin,
    }

    // Inner element
    const inner = (
      <RNView style={[viewStyle, style]} {...restProps}>
        {children}
      </RNView>
    )

    // Decide if should use Touchable
    const shouldWrapInTouchableComponent =
      onClick ||
      onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut

    if (!!shouldWrapInTouchableComponent) // Need wrap in Touchable
    {
      return (
        <TouchableView
          style={[viewStyle, style, { width: undefined, height: undefined }]}
          {...restProps}
          onPress={(onPress || onClick) && this.handlePress}
        >
          {inner}
        </TouchableView>
      )
    } else // No need wrap in Touchable
    {
      return inner
    }
  }
}


interface ViewProps
{
  // Flex
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'around' | 'between'
  wrap?: any
  flex?: number
  // View
  height?: number | string
  width?: number | string
  padding?: number | string
  paddingBottom?: number | string
  paddingX?: number | string
  paddingLeft?: number | string
  paddingRight?: number | string
  paddingTop?: number | string
  paddingY?: number | string
  margin?: number | string
  marginBottom?: number | string
  marginX?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  marginTop?: number | string
  marginY?: number | string
  // Children
  style?: StyleProp<ViewStyle> | any
  children?: React.ReactNode
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
  onClick?: Function
  // Style
  backgroundColor?: string
}

export default View

export {
  ViewProps,
}
