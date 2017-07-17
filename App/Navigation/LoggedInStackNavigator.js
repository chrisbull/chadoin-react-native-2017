import { StackNavigator } from 'react-navigation'
import AuthenticatedScreen from '../Containers/AuthenticatedScreen'
import AnotherAuthenticatedScreen from '../Containers/AnotherAuthenticatedScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  AuthenticatedScreen: {
    screen: AuthenticatedScreen,
    navigationOptions: {
      title: 'You are logged in'
    }
  },
  AnotherAuthenticatedScreen: { screen: AnotherAuthenticatedScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header,
    headerTintColor: styles.header.color
  }
})
