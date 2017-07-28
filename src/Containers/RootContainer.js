/*
 * NO NEED TO EDIT THIS FILE!
 * UNLESS YOU ABSOLUELY KNOW WHAT YOU ARE DOING
 * AND HAVE GOOD REASON FOR IT
 */

import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
import StartupActions from '../Redux/StartupRedux'
import ReduxNavigation from '../Navigation/ReduxNavigation'

const styles = StyleSheet.create({
  applicationView: {
    flex: 1,
  },
})

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="dark-content" />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(null, mapDispatchToProps)(RootContainer)
