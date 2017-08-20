/* @flow */
import './config'
import DebugConfig from './config/DebugConfig'
import { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { registerScreens } from './screens'
import configureStore from './store'
import rootReducer from './redux'
import rootSaga from './sagas'

const store = configureStore(rootReducer, rootSaga)

registerScreens(store, Provider)

class App extends Component {
  constructor(props) {
    super(props)
    this.startApp()
  }

  startApp() {
    const Nav = Navigation.startSingleScreenApp({
      screen: {
        screen: 'app.AppLoaderScreen',
        navigatorStyle: {
          navBarHidden: true,
        },
      },
    })

    console.log(Nav)
  }
}

// export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)
export default App
