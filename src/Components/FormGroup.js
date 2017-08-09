/* @flow */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Borders, Metrics } from '../Themes'

const FormGroup = props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...Borders.defaultStyleRadius,
    marginVertical: Metrics.spacing.regular,
    overflow: 'hidden',
  },
})

export default FormGroup
