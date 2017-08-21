/* @flow */
import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

/*
  This is where we connect AppNavigation smart with redux
*/

const ReduxNavigation = props => {
  const { dispatch, nav } = props
  const navigation = addNavigationHelpers({ dispatch, state: nav })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })

export default connect(mapStateToProps)(ReduxNavigation)
