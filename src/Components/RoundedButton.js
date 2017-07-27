import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Fonts, Colors, Metrics } from '../Themes/'

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
  },
})

ExamplesRegistry.addComponentExample('Rounded Button', () =>
  <RoundedButton
    text="real buttons have curves"
    onPress={() => window.alert('Rounded Button Pressed!')}
  />,
)

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
