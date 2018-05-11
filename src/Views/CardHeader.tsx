import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

class CardHeader extends React.Component<Props, never>
{

  render()
  {
    const {
      containerStyle,
      rightContent,
      rightContentStyle,
      leftContent,
      leftContentStyle,
      content,
      contentStyle,
    } = this.props

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={leftContentStyle}>
          {leftContent}
        </View>
        <View style={contentStyle}>
          {content}
        </View>
        <View style={rightContentStyle}>
          {rightContent}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#f0f0f0',
    borderTopColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    width: '100%',
  },
})

interface Props
{
  title: string | number | React.ReactNode
  containerStyle?: ViewStyle
  leftContent?: React.ReactNode
  leftContentStyle?: ViewStyle
  content?: React.ReactNode
  contentStyle?: ViewStyle
  rightContent?: React.ReactNode
  rightContentStyle?: ViewStyle
}

export default CardHeader
