import { StackNavigator } from 'react-navigation'
import sharedNavigationOptions from './SharedNavigationOptions'

import ChatsListScreen from '../Containers/ChatsListScreen'
import ChatCreateScreen from '../Containers/ChatCreateScreen'
import ChatMessagesScreen from '../Containers/ChatMessagesScreen'

export const NewChatStack = StackNavigator(
  {
    ChatCreateScreen: { screen: ChatCreateScreen },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export const ChatMessagesStack = StackNavigator(
  {
    ChatMessagesScreen: { screen: ChatMessagesScreen },
  },
  {
    headerMode: 'none',
  },
)

export default StackNavigator(
  {
    ChatsList: { screen: ChatsListScreen },
    ChatMessages: { screen: ChatMessagesStack },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)
