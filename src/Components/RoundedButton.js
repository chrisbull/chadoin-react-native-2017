import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../Themes'

const appStyles = ApplicationStyles

export default class RoundedButton extends Component {
  getText() {
    const buttonText = this.props.label || this.props.children || ''
    return buttonText
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          appStyles.button,
          this.props.primary && appStyles.buttonPrimary,
          this.props.secondary && appStyles.buttonSecondary,
          this.props.style,
        ]}
        onPress={this.props.onPress}
      >
        <Text
          style={[
            appStyles.buttonText,
            this.props.primary && appStyles.buttonColorText,
            this.props.secondary && appStyles.buttonColorText,
            this.props.labelStyle,
          ]}
        >
          {this.getText()}
        </Text>
      </TouchableOpacity>
    )
  }
}
