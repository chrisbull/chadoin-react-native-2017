import { StackNavigator } from 'react-navigation'
import sharedNavigationOptions from './SharedNavigationOptions'
import EventsListScreen from '../Containers/EventsListScreen'
import EventCreateScreen from '../Containers/EventCreateScreen'
import EventEditScreen from '../Containers/EventEditScreen'
import EventViewScreen from '../Containers/EventViewScreen'

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
