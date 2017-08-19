import { Navigation } from 'react-native-navigation'

import Home from './HomeScreen'
// import Drawer from './modules/_global/Drawer'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('chadoin.Home', () => Home, store, Provider)
  // Navigation.registerComponent('chadoin.Drawer', () => Drawer);
}
