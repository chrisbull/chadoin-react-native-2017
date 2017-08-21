import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Borders } from '../theme'

const FormSeparator = () => {
  return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
  seperator: Borders.separatorStyle,
})

export default FormSeparator
