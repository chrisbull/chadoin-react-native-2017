import React from 'react'
import { View } from 'react-native'
import { ApplicationStyles, Metrics } from '../theme'
const styles = ApplicationStyles

export default ({ highlighted }) => {
  return (
    Metrics.isiOS &&
    <View style={[styles.tableSeparator, highlighted && { marginLeft: 0 }]} />
  )
}
