import { StackNavigator } from 'react-navigation'
import ChatsListScreen from '../Containers/ChatsListScreen'
import ChatMessagesScreen from '../Containers/ChatMessagesScreen'
import ChatNewScreen from '../Containers/ChatNewScreen'

import sharedNavigationOptions from './SharedNavigationOptions'

const ChatsMainStack = StackNavigator(
  {
    ChatsMainStackHome: { screen: ChatsListScreen },
    ChatMessages: { screen: ChatMessagesScreen },
    EditChat: { screen: ChatNewScreen }, // TODO: change to ChatEditScreen
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

const NewChatStack = StackNavigator(
  {
    NewChatStackHome: { screen: ChatNewScreen },
  },
  {
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

const MainModalNavigator = StackNavigator(
  {
    ChatsMainStack: { screen: ChatsMainStack },
    NewChat: { screen: NewChatStack },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      ...sharedNavigationOptions,
    },
  },
)

export default MainModalNavigator
