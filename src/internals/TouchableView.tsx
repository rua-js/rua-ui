import * as React from 'react'
// @ts-ignore: no define
import Touchable from 'react-native-platform-touchable';

class TouchableView extends React.Component<any, never> {

  static defaultProps = {
    underlayColor: '#ddd'
  }

  render() {
    const { children, underlayColor, ...props } = this.props
    return (
      <Touchable
        underlayColor={underlayColor}
        {...props}
      >
        {children}
      </Touchable>
    )
  }
}

export interface TouchableViewProps
{
  [key: string]: any
}

export default TouchableView
