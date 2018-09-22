import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../shared'

class Divider extends React.PureComponent<DividerProps, never>
{

  static defaultProps = {
    color: colors.border,
    vertical: false,
  }

  computeStyle()
  {
    const { color, vertical } = this.props

    if (vertical)
    {
      return {
        borderRightColor: color,
      }
    }

    return {
      borderBottomColor: color,
    }
  }

  render()
  {
    const { vertical } = this.props
    const style = styles[vertical ? 'vertical' : 'horizontal']
    return (
      <View style={[style, this.computeStyle()]}/>
    )
  }
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    borderBottomWidth: 1,
  },
  vertical: {
    height: '100%',
    borderRightWidth: 1,
  },
})

export interface DividerProps
{
  vertical?: boolean
  color?: string
}

export default Divider
