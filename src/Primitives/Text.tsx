import * as React from 'react'
import {
  Text as RNText,
  TextProperties,
  TextStyle,
  StyleSheet,
} from 'react-native'

class Text extends React.Component<TextProps, never>
{

  /**
   * Synchronize style between Android and iOS
   *
   * @type {object}
   */
  static defaultProps = {
    style: {},
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
      backgroundColor,
      family: fontFamily,
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
      fontFamily,
      backgroundColor,
    }

    // Return
    return (
      <RNText
        style={[styles.el, computedTextStyle, style]}
        {...rest}
      >
        {children}
      </RNText>
    )
  }
}

const styles = StyleSheet.create({
  el: {
    color: '#1b1b1b',
  },
})

interface TextProps extends TextProperties
{
  size?: number
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  color?: string
  line?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  style?: TextStyle
  decoration?: 'none' | 'italic'
  lineHeight?: number
  family?: string
  backgroundColor?: string
}

export default Text

export {
  TextProps,
}
