import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ApplicationStyles, Colors } from '../Themes'

const appStyles = ApplicationStyles

let styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',
  },
  h3: {
    ...appStyles.h3,
    textAlign: 'center',
    color: Colors.lightColorDarkOpacity,
    marginBottom: 5,
  },
  paragraph: {
    textAlign: 'center',
    color: Colors.lightColorLightOpacity,
  },
})

export default class NoConnectionScreen extends Component {
  render() {
    if (!this.props.isConnected) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.h3}>Ohhh no!</Text>
            <Text style={styles.paragraph}>
              It looks like you are not connected to the internet
            </Text>
          </View>
        </View>
      )
    }

    return <View />
  }
}
