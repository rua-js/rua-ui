import * as React from 'react'
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native'

export default function ScrollView(props: RNScrollViewProps)
{
  return (
    <RNScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  )
}

export interface ScrollViewProps extends RNScrollViewProps {}
