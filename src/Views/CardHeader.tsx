import * as React from 'react'
import { View, Text, ViewProps } from '../Primitives'
import { StyleSheet, ViewStyle } from 'react-native'

class CardHeader extends React.Component<CardHeaderProps, never>
{

  render()
  {
    const {
      containerStyle,
      containerProps,
      rightContent,
      rightContentStyle,
      rightContentProps,
      leftContent,
      leftContentStyle,
      leftContentProps,
      content,
      contentStyle,
      contentProps,
    } = this.props

    return (
      <View
        style={[styles.container, containerStyle]}
        {...containerProps}
      >
        <View
          style={[styles.subContent, styles.leftContent, leftContentStyle]}
          {...leftContentProps}
        >
          {leftContent}
        </View>
        <View
          style={[styles.subContent, contentStyle]}
          {...contentProps}
        >
          {content}
        </View>
        <View
          style={[styles.subContent, styles.rightContent, rightContentStyle]}
          {...rightContentProps}
        >
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
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    position: 'absolute',
    left: 0,
  },
  rightContent: {
    position: 'absolute',
    right: 0,
  },
})

export interface CardHeaderProps
{
  // Container
  containerStyle?: ViewStyle
  containerProps?: ViewProps
  // Left content
  leftContent?: React.ReactNode
  leftContentStyle?: ViewStyle
  leftContentProps?: ViewProps
  // Content
  content?: React.ReactNode
  contentStyle?: ViewStyle
  contentProps?: ViewProps
  // Right content
  rightContent?: React.ReactNode
  rightContentStyle?: ViewStyle
  rightContentProps?: ViewProps
}

export default CardHeader
