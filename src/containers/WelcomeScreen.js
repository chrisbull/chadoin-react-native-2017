/* @flow */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { ApplicationStyles } from '../theme'

const appStyles = ApplicationStyles

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...appStyles.mainContainer,
  },
})

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
