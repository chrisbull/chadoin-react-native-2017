import React from 'react'
import { View, Platform } from 'react-native'
import { ApplicationStyles } from '../Themes'
const styles = ApplicationStyles

export default ({ highlighted }) => {
  return (
    Platform.OS !== 'android' &&
    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
  )
}
