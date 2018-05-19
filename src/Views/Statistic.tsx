import * as React from 'react'
import { StyleProp, StyleSheet, ViewStyle as RNViewStyle, } from 'react-native'

import { View, ViewProps } from '../Primitives'
import { TextView } from './'
import { TextViewProps } from './TextView'
import { Space } from '../Elements'

class Statistic extends React.Component<StatisticProps, never>
{
  render()
  {
    const {
      containerViewStyle,
      containerViewProps,
      value,
      label,
      spaceSize,
      valueTextViewProps,
      labelTextViewProps,
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
                textStyle={styles.value}
                viewStyle={styles.valueText}
                {...valueTextViewProps}
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
                textStyle={styles.label}
                viewStyle={styles.labelText}
                {...labelTextViewProps}
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
  valueTextViewProps?: TextViewProps
  labelTextViewProps?: TextViewProps
  value?: string | number
  label?: string | number
  spaceSize?: number
  renderValueComponent?: (props: StatisticProps) => React.ReactNode
  renderLabelComponent?: (props: StatisticProps) => React.ReactNode
  renderSpaceComponent?: (props: StatisticProps) => React.ReactNode
}

export default Statistic
