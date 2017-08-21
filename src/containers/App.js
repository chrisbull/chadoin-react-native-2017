/*
 * NO NEED TO EDIT THIS FILE!
 * UNLESS YOU ABSOLUELY KNOW WHAT YOU ARE DOING
 * AND HAVE GOOD REASON FOR IT
 */

import '../config'
import DebugConfig from '../config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../redux'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)
