import { StackNavigator } from 'react-navigation'
import LoadingScreen from '../Containers/LoadingScreen'
import LoggedInStackNavigator from './LoggedInStackNavigator'
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator'

import navigationStyles from './Styles/NavigationStyles'

// Manifest of possible screens
const AppNavigation = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  LoggedInStack: { screen: LoggedInStackNavigator },
  NotLoggedInStack: { screen: NotLoggedInStackNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    headerStyle: navigationStyles.header,
    headerTintColor: 'white'
  }
})

export default AppNavigation
