import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../Themes'

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
    ...Fonts.style.h3,
    textAlign: 'center',
    color: Fonts.color.inverse,
    marginBottom: 5,
  },
  text: {
    ...Fonts.style.medium,
    textAlign: 'center',
    opacity: 0.8,
    color: Fonts.color.inverse,
    marginBottom: 5,
  },
})

styles = StyleSheet.flatten([ApplicationStyles, styles])

export default class NoConnectionScreen extends Component {
  render() {
    if (!this.props.isConnected) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.h3}>Ohhh no!</Text>
            <Text style={styles.text}>
              It looks like you are not connected to the internet
            </Text>
          </View>
        </View>
      )
    }

    return null
  }
}
