/* @flow */
import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ApplicationStyles } from '../themes'

const appStyles = ApplicationStyles

export default class TextLink extends Component {
  getText() {
    return this.props.title || this.props.children || ''
  }

  render() {
    return (
      <TouchableOpacity {...this.props}>
        <Text style={[styles.text, this.props.textStyle]}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    ...appStyles.textLink,
  },
})
