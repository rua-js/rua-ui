import * as React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { TouchableView } from '../Internals'
import { Text } from '../Primitives'
import { Space } from '../Elements'
// material
import { default as EntypoIcon } from 'react-native-vector-icons/Entypo'
import { default as EvilIconsIcon } from 'react-native-vector-icons/EvilIcons'
import { default as FeatherIcon } from 'react-native-vector-icons/Feather'
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome'
import { default as FoundationIcon } from 'react-native-vector-icons/Foundation'
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as OcticonsIcon } from 'react-native-vector-icons/Octicons'
import { default as ZocialIcon } from 'react-native-vector-icons/Zocial'
import { default as SimpleLineIconsIcon } from 'react-native-vector-icons/SimpleLineIcons'

const iconComponents = {
  entypo: EntypoIcon,
  evil: EvilIconsIcon,
  feather: FeatherIcon,
  fontAwesome: FontAwesomeIcon,
  foundation: FoundationIcon,
  ionic: IoniconsIcon,
  material: MaterialIcon,
  octicons: OcticonsIcon,
  zocial: ZocialIcon,
  simpleLine: SimpleLineIconsIcon,
}

class IconText extends React.Component<Props, never>
{

  static defaultProps = {
    space: 5,
    textColor: '#333',
    iconSet: 'material',
    direction: 'column',
  }

  render()
  {
    const {
      direction,
      space,
      icon,
      iconSet,
      iconColor,
      iconSize,
      iconStyle,
      text,
      textColor,
      textSize,
      textFamily,
      textDecoration,
      textWeight,
      textLine,
      textStyle,
      ...restProps
    } = this.props

    const Icon = iconComponents[iconSet]

    const inner = (
      <View style={styles.container}>
        <View style={[styles.iconText, { flexDirection: direction }]}>
          <Icon
            name={icon}
            color={iconColor}
            size={iconSize}
            style={iconStyle}
          />
          <Space size={space} />
          <Text
            color={textColor}
            size={textSize}
            family={textFamily}
            decoration={textDecoration}
            weight={textWeight}
            line={textLine}
            style={textStyle}
          >{text}</Text>
        </View>
      </View>
    )

    const shouldWrapInTouchableComponent =
      restProps.onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut

    if (!!shouldWrapInTouchableComponent)
    {
      return (
        <TouchableView style={styles.container} {...restProps}>
          {inner}
        </TouchableView>
      )
    } else
    {
      return inner
    }
  }
}

const styles = StyleSheet.create({
  container: {},
  iconText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

interface Props
{
  // Basic
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  // Icon
  icon?: string
  iconSet?: string
  iconStyle: any
  iconColor: string
  iconSize: number
  // Text
  text: string
  textSize?: number
  textWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  textColor?: string
  textLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  textStyle?: TextStyle
  textDecoration?: 'none' | 'italic'
  textLineHeight?: number
  textFamily?: string
  // space
  space?: number
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
}

export default IconText
