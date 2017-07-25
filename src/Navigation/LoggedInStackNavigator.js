import { StackNavigator } from 'react-navigation'
import AuthenticatedScreen from '../Containers/AuthenticatedScreen'
import AnotherAuthenticatedScreen from '../Containers/AnotherAuthenticatedScreen'
import EventsStackNavigator from './EventsStackNavigator'

import sharedNavigationOptions from './SharedNavigationOptions'

// Manifest of possible screens
export default StackNavigator(
  {
    AuthenticatedScreen: { screen: AuthenticatedScreen },
    AnotherAuthenticatedScreen: { screen: AnotherAuthenticatedScreen },
    EventsStack: { screen: EventsStackNavigator },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
