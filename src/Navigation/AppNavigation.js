import { StackNavigator } from 'react-navigation'
import LoadingScreen from '../Containers/LoadingScreen'
import LoggedInStackNavigator from './LoggedInStackNavigator'
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator'
import sharedNavigationOptions from './SharedNavigationOptions'

// Manifest of possible screens
const AppNavigation = StackNavigator(
  {
    LoadingScreen: { screen: LoadingScreen },
    LoggedInStack: { screen: LoggedInStackNavigator },
    NotLoggedInStack: { screen: NotLoggedInStackNavigator },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export default AppNavigation
