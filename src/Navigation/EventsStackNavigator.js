import { StackNavigator } from 'react-navigation'
import Events from '../Containers/EventsScreen'
import Event from '../Containers/EventScreen'

import sharedNavigationOptions from './SharedNavigationOptions'

const MainCardNavigator = StackNavigator(
  {
    Main: { screen: Events },
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
    EventStack: { screen: MainCardNavigator },
    EventScreen: { screen: Event },
  },
  {
    mode: 'modal',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export default MainModalNavigator
