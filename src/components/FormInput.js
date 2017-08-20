/* @flow */

import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Metrics, ApplicationStyles, Forms } from '../themes'

const appStyles = ApplicationStyles

const styles = StyleSheet.create({
  formInput: {
    ...appStyles.formInput,
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
