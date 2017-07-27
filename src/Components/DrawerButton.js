import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Metrics, Colors, Fonts } from '../Themes'

const styles = {
  text: {
    ...Fonts.style.h5,
    color: Colors.white,
    marginVertical: Metrics.baseMargin,
  },
}

export default class DrawerButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
