import * as React from 'react'
import { Text as RNText, TextProperties, TextStyle } from 'react-native'

class Text extends React.Component<Props, never>
{

  /**
   * Synchronize style between Android and iOS
   *
   * @type {object}
   */
  static defaultProps = {
    size: 16,
    weight: '400',
    align: 'left',
    color: '#000',
  }

  /**
   * Render function
   *
   * @returns {any}
   */
  render()
  {
    // Pick out NONE-RN Text property
    const {
      children,
      color,
      style,
      size: fontSize,
      weight: fontWeight,
      align: textAlign,
      ...rest
    } = this.props

    // Compute text style
    const computedTextStyle = {
      color,
      fontWeight,
      fontSize,
      textAlign,
      ...style,
    }

    // Return
    return (
      <RNText
        style={[computedTextStyle]}
        {...rest}
      >
        {children}
      </RNText>
    )
  }
}

interface Props extends TextProperties
{
  size?: number
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  color?: string
  decorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  style?: TextStyle
}

export default Text
