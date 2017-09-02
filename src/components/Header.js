/* @flow */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  AppStyles,
  Borders,
  Buttons,
  Colors,
  Fonts,
  Forms,
  Images,
  Metrics,
} from '../theme'

const MyComponent = props =>
  <View style={styles.container}>
    <Text>MyComponent component</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
