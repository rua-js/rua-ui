import * as React from 'react'
import View, { Props } from '../Primitives/View'
import { color } from '../Configs'

class Card extends React.Component<Props, never>
{
  render()
  {
    const {
      backgroundColor,
      children,
      ...restProps,
    } = this.props
    return (
      <View
        backgroundColor={backgroundColor || color.white}
        {...restProps}
      >
        {children}
      </View>
    )
  }
}


export default Card


