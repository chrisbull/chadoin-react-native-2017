import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Borders, Fonts, Colors, Metrics } from '../theme'

export default class Button extends Component {
  render() {
    let state =
      (this.props.primary && 'primary') || (this.props.secondary && 'secondary')

    return (
      <TouchableOpacity
        {...this.props}
        style={[
          styles.base.container,
          styles[state].container,
          this.props.style,
        ]}
        onPress={this.props.onPress}
      >
        <Text
          style={[styles.base.text, styles[state].text, this.props.textStyle]}
        >
          {this.props.label || this.props.children || ''}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  base: {
    container: {
      ...Borders.defaultStyleRadius,
      paddingHorizontal: Metrics.spacing.large,
      paddingVertical: Metrics.spacing.small,
      height: Metrics.buttonHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...Fonts.style.body,
      textAlign: 'center',
    },
  },
  primary: {
    container: {
      backgroundColor: Colors.primary,
      borderWidth: 0,
    },
    text: {
      color: Colors.white,
    },
  },
  secondary: {
    container: {
      backgroundColor: Colors.secondary,
      borderWidth: 0,
    },
    text: {
      color: Colors.white,
    },
  },
}
