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
    color: '#000',
    style: {},
    line: 'none',
    align: 'left',
    // lineHeight: 14', // no need
    // size: 14, // no need
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
      lineHeight,
      line: textDecorationLine,
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
      textDecorationLine,
      lineHeight,
    }

    // Return
    return (
      <RNText
        style={[computedTextStyle, style]}
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
  line?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  style?: TextStyle
  decoration?: 'none' | 'italic'
  lineHeight?: number
}

export default Text
