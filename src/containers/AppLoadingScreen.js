/* @flow */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

/*
  Blank screen to load first while the state is being rehydrated
  and determining if user is logged in or not
*/

export default class AppLoadingScreen extends Component {
  render() {
    return <View style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
