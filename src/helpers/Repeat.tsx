import * as React from 'react'

export default class Repeat extends React.PureComponent<RepeatProps, never>
{
  render()
  {
    const { count, children } = this.props

    const returnValue = []

    for (let i = 0; i < count; i += 1 )
    {
      returnValue.push(children)
    }

    return returnValue
  }
}

export interface RepeatProps
{
  count: number
}
