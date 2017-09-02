/* @flow */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { AppStyles } from '../theme'

class OnboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>OnboardScreen component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...AppStyles.mainContainer,
  },
})

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(OnboardScreen)
