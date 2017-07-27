import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Fonts, Colors } from '../Themes/'

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: Colors.blue,
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
  },
})

ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text="Hey there"
    onPress={() => window.alert('Full Button Pressed!')}
  />,
)

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.text && this.props.text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}
