import { StackNavigator } from 'react-navigation'
import EventsListScreen from '../Containers/EventsListScreen'
import EventScreen from '../Containers/EventScreen'

import sharedNavigationOptions from './SharedNavigationOptions'

const EventMainStack = StackNavigator(
  {
    EventsListScreen: { screen: EventsListScreen },
    EventScreen: { screen: EventScreen },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

const MainModalNavigator = StackNavigator(
  {
    EventMainStack: { screen: EventMainStack },
    NewEventScreen: { screen: EventScreen },
  },
  {
    mode: 'modal',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export default MainModalNavigator
