import { StackNavigator } from 'react-navigation'
import sharedNavigationOptions from './SharedNavigationOptions'
import EventsListScreen from '../Containers/EventsListScreen'
import EventScreen from '../Containers/EventScreen'

export const NewEventStack = StackNavigator(
  {
    NewEvent: { screen: EventScreen },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export const EditEventStack = StackNavigator(
  {
    EditEvent: { screen: EventScreen },
  },
  {
    headerMode: 'none',
  },
)

export default StackNavigator(
  {
    EventsList: { screen: EventsListScreen },
    EditEvent: { screen: EditEventStack },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
