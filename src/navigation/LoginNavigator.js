import { StackNavigator } from 'react-navigation'
import LoginScreen from '../containers/LoginScreen'

import sharedNavigationOptions from './SharedNavigationOptions'

// Manifest of possible screens
export default StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
