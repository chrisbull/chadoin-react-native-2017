/* @flow */
import { StackNavigator } from 'react-navigation'

/* Screens */
import AppLoadingScreen from '../containers/AppLoadingScreen'
import WelcomeScreen from '../containers/WelcomeScreen'
import LoginScreen from '../containers/LoginScreen'
import SignUpScreen from '../containers/SignUpScreen'
import HomeScreen from '../containers/HomeScreen'

/* Manifest of all possible screens */
const AppNavigation = StackNavigator(
  {
    AppLoadingScreen: { screen: AppLoadingScreen },
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    HomeScreen: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
  },
)

export default AppNavigation
