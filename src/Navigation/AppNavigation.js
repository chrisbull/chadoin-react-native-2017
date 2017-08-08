import { StackNavigator } from 'react-navigation'
import LoadingScreen from '../Containers/LoadingScreen'
import MainNavigator from './MainNavigator'
import LoginNavigator from './LoginNavigator'
import WalkthroughNavigator from './WalkthroughNavigator'

// Manifest of possible screens
const AppNavigation = StackNavigator(
  {
    LoadingScreen: { screen: LoadingScreen },
    LoginScreen: { screen: LoginNavigator },
    WalkthroughScreen: { screen: WalkthroughNavigator },
    MainScreen: { screen: MainNavigator },
  },
  {
    headerMode: 'none',
  },
)

export default AppNavigation
