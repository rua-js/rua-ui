import * as React from 'react'
import View, { ViewProps } from '../primitives/View'
import { colors } from '../configs'

// Internal components
import CardHeader from './CardHeader'

class Card extends React.PureComponent<CardProps, never>
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


