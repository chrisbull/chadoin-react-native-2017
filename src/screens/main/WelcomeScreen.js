/* @flow */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the WelcomeScreen component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
