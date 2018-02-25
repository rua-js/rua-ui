import * as React from 'react'
import { Text as RNText } from 'react-native'

class Text extends React.Component<Props, never>
{

  static defaultProps = {
    size: 16,
    weight: '400',
    align: 'left',
    color: '#000',
    decorationLine: 'none',
  }

  computeTextStyle = () =>
  {
    const {
      color,
      size: fontSize,
      weight: fontWeight,
      align: textAlign,
      decorationLine: textDecorationLine
    } = this.props

    return {
      color,
      fontWeight,
      fontSize,
      textAlign,
      textDecorationLine,
    }
  }

  render()
  {
    const { children, ...rest } = this.props
    return (
      <RNText
        style={[this.computeTextStyle()]}
        {...rest}
      >
        {children}
      </RNText>
    )
  }
}

interface Props
{
  size?: number
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  color?: string
  decorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
}

export default Text
