import { StackNavigator } from 'react-navigation'
import EventsScreen from '../Containers/EventsScreen'
import EventScreen from '../Containers/EventScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator(
  {
    EventsScreen: { screen: EventsScreen },
    EventScreen: { screen: EventScreen }
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header,
      headerTintColor: 'white'
    }
  }
)
