/* @flow */
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import AppLoaderScreen from './AppLoaderScreen'
import HomeScreen from './main/HomeScreen'

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'app.AppLoaderScreen',
    () => AppLoaderScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    'app.Main.Home',
    () => HomeScreen,
    store,
    Provider,
  )
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        'screenVisibility',
        `Screen ${screen} displayed in ${endTime -
          startTime} millis [${commandType}]`,
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`),
  }).register()
}
