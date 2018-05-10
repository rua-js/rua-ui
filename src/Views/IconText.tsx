import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class IconText extends React.Component<Props, never>
{

  static defaultProps = {
    gutter: 5,
  }

  render()
  {
    const { icon, text, gutter } = this.props
    const inner = (
      <View style={styles.container}>
        <View style={styles.iconText}>
          {icon}
          <View style={[styles.iconTextGutter, { height: gutter }]} />
          <Text style={styles.iconTextText}>
            {text}
          </Text>
        </View>
      </View>
    )

    return inner
  }
}

const styles = StyleSheet.create({
  container: {},
  iconText: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTextGutter: {
    width: '100%',
  },
  iconTextText: {
    color: '#333'
  },
})

interface Props
{
  icon: React.ReactNode
  text: string | number
  gutter?: number
  // Touchable
  onPress?: Function
  onLongPress?: Function
  onPressIn?: Function
  onPressOut?: Function
}

export default IconText
