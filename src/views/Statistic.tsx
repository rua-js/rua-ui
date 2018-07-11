import * as React from 'react'
import {
  StyleProp,
  StyleSheet,
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
} from 'react-native'

import { TextProps, View, ViewProps } from '../primitives'
import { TextView } from './'
import { Space } from '../elements'

class Statistic extends React.Component<StatisticProps, never>
{
  static defaultProps = {
    spaceSize: 5,
  }

  render()
  {
    const {
      containerViewStyle,
      containerViewProps,
      value,
      label,
      spaceSize,
      valueViewProps,
      valueTextProps,
      labelViewProps,
      labelTextProps,
      valueViewStyle,
      valueTextStyle,
      labelViewStyle,
      labelTextStyle,
      renderValueComponent,
      renderLabelComponent,
      renderSpaceComponent,
    } = this.props
    return (
      <View
        style={[styles.containerViewDefault, containerViewStyle]}
        {...containerViewProps}
      >
        {
          renderValueComponent
            ? renderValueComponent(this.props)
            : (
              <TextView
                textStyle={[styles.valueText, valueTextStyle]}
                textProps={valueTextProps}
                viewStyle={[styles.value, valueViewStyle]}
                viewProps={valueViewProps}
              >
                {value}
              </TextView>
            )
        }
        {
          renderSpaceComponent
            ? renderSpaceComponent(this.props)
            : (<Space size={spaceSize} />)
        }
        {
          renderLabelComponent
            ? renderLabelComponent(this.props)
            : (
              <TextView
                textStyle={[styles.labelText, labelTextStyle]}
                textProps={labelTextProps}
                viewStyle={[styles.label, labelViewStyle]}
                viewProps={labelViewProps}
              >
                {label}
              </TextView>
            )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerViewDefault: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {},
  valueText: {
    fontSize: 17,
  },
  label: {},
  labelText: {},
})


export interface StatisticProps
{
  containerViewStyle?: StyleProp<RNViewStyle>
  containerViewProps?: ViewProps
  valueViewProps?: ViewProps
  valueTextProps?: TextProps
  valueViewStyle?: StyleProp<RNViewStyle>
  valueTextStyle?: StyleProp<RNTextStyle>
  labelViewProps?: ViewProps
  labelTextProps?: TextProps
  labelViewStyle?: StyleProp<RNViewStyle>
  labelTextStyle?: StyleProp<RNTextStyle>
  value: string | number
  label: string | number
  spaceSize?: number
  renderValueComponent?: (props: StatisticProps) => React.ReactNode
  renderLabelComponent?: (props: StatisticProps) => React.ReactNode
  renderSpaceComponent?: (props: StatisticProps) => React.ReactNode
}

export default Statistic
