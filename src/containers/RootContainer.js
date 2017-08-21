/* @flow */
import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import ReduxPersist from '../config/ReduxPersist'
import StartupActions from '../redux/StartupRedux'
import ReduxNavigation from '../navigation/ReduxNavigation'

/*
  RootContainer initiates the ReduxNavigation
  and if the ReduxPersist hasn't been activated and restored,
  then StartupActions.startup() is ran to rehydrate the state.
  -----------------------------------------------------------
  Once the startup has completed, if logged in, then auto login is ran
  otherwise navigation state is set to go to the login page
*/

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startupSaga()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ReduxNavigation />
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

const mapDispatchToProps = dispatch => ({
  startupSaga: () => dispatch(StartupActions.startupSaga()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
