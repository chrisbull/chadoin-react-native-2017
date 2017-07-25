import { StackNavigator } from 'react-navigation'
import ChatsListScreen from '../Containers/ChatsListScreen'
import ChatMessageScreen from '../Containers/ChatMessageScreen'
import ChatCreateScreen from '../Containers/ChatCreateScreen'

import sharedNavigationOptions from './SharedNavigationOptions'

const MainCardNavigator = StackNavigator(
  {
    ChatsListScreen: { screen: ChatsListScreen },
    ChatMessageScreen: { screen: ChatMessageScreen },
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
    ChatsStack: { screen: MainCardNavigator },
    ChatCreateScreen: { screen: ChatCreateScreen },
  },
  {
    mode: 'modal',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export default MainModalNavigator
