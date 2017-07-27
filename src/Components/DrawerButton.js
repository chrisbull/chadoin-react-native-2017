import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Metrics, Colors, Fonts } from '../Themes'

const styles = {
  text: {
    ...Fonts.style.h5,
    color: Colors.white,
    marginVertical: Metrics.baseMargin,
  },
}

ExamplesRegistry.addComponentExample('Drawer Button', () =>
  <DrawerButton
    text="Example left drawer button"
    onPress={() => window.alert('Your drawers are showing')}
  />,
)

class DrawerButton extends Component {
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

export default DrawerButton
