import { StackNavigator } from 'react-navigation'
import LoadingScreen from '../Containers/LoadingScreen'
import MainNavigator from './MainNavigator'
import LoginNavigator from './LoginNavigator'
import sharedNavigationOptions from './SharedNavigationOptions'

// Manifest of possible screens
const AppNavigation = StackNavigator(
  {
    LoadingScreen: { screen: LoadingScreen },
    MainScreen: { screen: MainNavigator },
    LoginScreen: { screen: LoginNavigator },
  },
  {
    headerMode: 'none',
  },
)

export default AppNavigation
