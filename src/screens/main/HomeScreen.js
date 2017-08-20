/* @flow */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Colors, ApplicationStyles } from '../../themes'
import { defaultNavigatorStyle } from '../../utils/NavigatorStyle'

const appStyles = ApplicationStyles

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>I'm the HomeScreen component</Text>
        </View>
      </View>
    )
  }
}
HomeScreen.navigatorStyle = defaultNavigatorStyle({
  navBarHidden: true,
})

const styles = StyleSheet.create({
  container: {
    ...appStyles.centerContentContainer,
    backgroundColor: Colors.blue,
  },
  contentContainer: {
    ...appStyles.messageBoxContainer,
  },
})

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
