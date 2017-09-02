import React from 'react'
import { View } from 'react-native'
import { AppStyles, Metrics } from '../theme'
const styles = AppStyles

export default ({ highlighted }) => {
  return (
    Metrics.isiOS &&
    <View style={[styles.tableSeparator, highlighted && { marginLeft: 0 }]} />
  )
}
