import * as React from 'react'
// @ts-ignore: no define
import Touchable from 'react-native-platform-touchable'

class TouchableView extends React.PureComponent<any, never>
{

  static defaultProps = {
    underlayColor: '#ddd',
  }

  render()
  {
    const { children, underlayColor, ...restProps } = this.props

    return (
      <Touchable
        underlayColor={underlayColor}
        {...restProps}
      >
        {children}
      </Touchable>
    )
  }
}

export interface TouchableViewProps
{
  [ key: string ]: any
}

export default TouchableView
