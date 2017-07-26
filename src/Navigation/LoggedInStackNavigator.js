import { TabNavigator } from 'react-navigation'
import EventsStackNavigator from './EventsStackNavigator'
import ChatsStackNavigator from './ChatsStackNavigator'

import sharedNavigationOptions from './SharedNavigationOptions'

// Manifest of possible screens
export default TabNavigator(
  {
    Events: { screen: EventsStackNavigator },
    Chats: { screen: ChatsStackNavigator },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
