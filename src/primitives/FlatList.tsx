import * as React from 'react'
import { FlatList as RNFlatList, FlatListProps as RNFlatListProps } from 'react-native'

export default class FlatList extends React.PureComponent<FlatListProps, never>
{
  render()
  {
    const { ...restProps } = this.props

    return (
      <RNFlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...restProps}
      />
    )
  }
}

export interface FlatListProps extends RNFlatListProps<any>
{

}