/* @flow */
import { StackNavigator } from 'react-navigation'

/* Screens */
import LaunchScreen from '../containers/LaunchScreen'
import OnboardScreen from '../containers/OnboardScreen'
import LoginScreen from '../containers/LoginScreen'
import SignUpScreen from '../containers/SignUpScreen'
import HomeScreen from '../containers/HomeScreen'

/* Manifest of all possible screens */
const AppNavigation = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    OnboardScreen: { screen: OnboardScreen },
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    HomeScreen: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
  },
)

export default AppNavigation
