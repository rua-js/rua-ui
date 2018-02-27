import * as React from 'react'
import { View as RNView } from 'react-native'

import TouchableView from './TouchableView'

class View extends React.Component<Props, any>
{
  static defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    padding: 0,
    margin: 0,
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
      children,
      ...restProps,
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

    const inner = (
      <RNView style={[viewStyle, style]} {...restProps}>
        {children}
      </RNView>
    )

    const shouldWrapInTouchableComponent =
      restProps.onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut

    if (!!shouldWrapInTouchableComponent)
    {
      return (
        <TouchableView style={[viewStyle, style]} {...restProps}>
          {inner}
        </TouchableView>
      )
    } else
    {
      return inner
    }
  }
}


interface Props
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
  // borderWidth?: number
  // borderColor?: any
  // backgroundColor?: string
  // Children
  style?: any
  children?: React.ReactNode
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
}

export default View
