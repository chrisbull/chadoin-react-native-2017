/*
 * NO NEED TO EDIT THIS FILE!
 * UNLESS YOU ABSOLUELY KNOW WHAT YOU ARE DOING
 * AND HAVE GOOD REASON FOR IT
 */

import { View, StatusBar, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import ReduxPersist from '../config/ReduxPersist'
import StartupActions from '../redux/StartupRedux'

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
        {/* <ReduxNavigation /> */}
        {/* <NoConnectionScreen isConnected={this.props.isConnected} /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  applicationView: {
    flex: 1,
  },
})

const mapStateToProps = ({ netInfo }) => ({
  isConnected: netInfo.isConnected,
})

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
