/* @flow */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import ReduxPersist from '../config/ReduxPersist'
import StartupActions from '../redux/StartupRedux'
import { Colors, ApplicationStyles } from '../themes'

const appStyles = ApplicationStyles

class AppLoaderScreen extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>AppLoaderScreen...</Text>
          <Text>This is where you will check for login status</Text>
          <Text>If logged in, navigate to Main</Text>
          <Text>If not logged in, navigate to Welcome</Text>
        </View>
      </View>
    )
  }
}

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

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppLoaderScreen)
