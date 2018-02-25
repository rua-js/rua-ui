import * as React from 'react'
import { View as RNView } from 'react-native'

import TouchableView from './TouchableView'

class View extends React.Component<Props, any>
{
  static defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'center',
  }

  render()
  {
    let {
      style,
      direction,
      wrap,
      justify,
      align,
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
    const flexStyle = {
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: transferConst[0],
      alignItems: transferConst[1],
    }

    const inner = (
      <RNView style={[flexStyle, style]} {...restProps}>
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
        <TouchableView {...restProps}>
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
  // View
  backgroundColor?: string
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
