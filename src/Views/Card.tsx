import * as React from 'react'
import View, { ViewProps } from '../Primitives/View'
import { colors } from '../Configs'

// Internal components
import CardHeader from './CardHeader'

class Card extends React.Component<CardProps, never>
{

  static Header = CardHeader

  render()
  {
    const {
      children,
      ...restProps
    } = this.props
    return (
      <View
        {...restProps}
      >
        {children}
      </View>
    )
  }
}

export interface CardProps extends ViewProps {}

export default Card


