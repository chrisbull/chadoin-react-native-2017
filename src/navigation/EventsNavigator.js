import { StackNavigator } from 'react-navigation'
import sharedNavigationOptions from './SharedNavigationOptions'
import EventsListScreen from '../containers/EventsListScreen'
import EventCreateScreen from '../containers/EventCreateScreen'
import EventEditScreen from '../containers/EventEditScreen'
import EventViewScreen from '../containers/EventViewScreen'

export const CreateEventStack = StackNavigator(
  {
    CreateEventMainScreen: { screen: EventCreateScreen },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export default StackNavigator(
  {
    EventsList: { screen: EventsListScreen },
    ViewEvent: { screen: EventViewScreen },
    EditEvent: { screen: EventEditScreen },
  },
  {
    // headerMode: 'none',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
