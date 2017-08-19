/* eslint-disable no-unused-vars */
import { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { iconsMap, iconsLoaded } from './utils/AppIcons'
import { registerScreens } from './screens/'
import configureStore from './store/configureStore'

import rootReducer from './redux/index'
import rootSaga from './sagas/index'

const store = configureStore(rootReducer, rootSaga)

registerScreens(store, Provider)

const navigatorStyle = {
  navBarTranslucent: true,
  drawUnderNavBar: false,
  // navBarBackgroundColor: 'purple',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true,
}

class App extends Component {
  constructor(props) {
    super(props)
    iconsLoaded.then(() => {
      this.startApp()
    })
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'chadoin.Home',
          // icon: iconsMap['ios-film-outline'],
          // selectedIcon: iconsMap['ios-film'],
          title: 'Home',
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'Search',
                id: 'search',
                // icon: iconsMap['ios-search'],
              },
            ],
          },
        },
        {
          label: 'Home2',
          screen: 'chadoin.Home',
          // icon: iconsMap['ios-desktop-outline'],
          // selectedIcon: iconsMap['ios-desktop'],
          title: 'Home2',
          navigatorStyle,
        },
      ],
      tabsStyle: {
        tabBarButtonColor: 'blue',
        tabBarSelectedButtonColor: 'blue',
        tabBarBackgroundColor: 'white',
      },
    })
  }
}

export default App
