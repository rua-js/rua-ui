import * as React from 'react'

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

class Icon extends React.PureComponent<IconProps, any>
{
  static defaultProps = {
    set: 'material',
  }

  render()
  {
    const {
      name,
      set,
      color,
      size,
      style,
    } = this.props

    const Icon = iconComponents[set]

    return (
      <Icon
        name={name}
        color={color}
        size={size}
        style={style}
      />
    )
  }
}

interface IconProps
{
  name: string
  set: string
  color?: string
  size?: number
  style?: any
}

export default Icon