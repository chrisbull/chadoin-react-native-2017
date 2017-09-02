/* @flow */

import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Metrics, AppStyles, Forms } from '../theme'

const styles = StyleSheet.create({
  formInput: {
    ...AppStyles.formInput,
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
    minHeight: Metrics.rowMinHeight,
    justifyContent: 'center',
    lineHeight: 25,
  },
})

export default class FormInput extends Component {
  render() {
    return (
      <TextInput
        style={styles.formInput}
        placeholderTextColor={Forms.placeholderTextColor}
        {...this.props}
      />
    )
  }
}
