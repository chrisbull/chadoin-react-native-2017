import { StackNavigator } from 'react-navigation'
import sharedNavigationOptions from './SharedNavigationOptions'
import EventsListScreen from '../Containers/EventsListScreen'
import EventEditScreen from '../Containers/EventEditScreen'
import EventViewScreen from '../Containers/EventViewScreen'

export const NewEventStack = StackNavigator(
  {
    NewEvent: { screen: EventEditScreen },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export const EditEventStack = StackNavigator(
  {
    EditEvent: { screen: EventEditScreen },
  },
  {
    headerMode: 'none',
  },
)

export default StackNavigator(
  {
    EventsList: { screen: EventsListScreen },
    EditEvent: { screen: EditEventStack },
    ViewEvent: { screen: EventViewScreen },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
