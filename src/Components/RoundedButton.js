import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../Themes'

const styles = ApplicationStyles

export default class RoundedButton extends Component {
  getText() {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    )
  }
}
