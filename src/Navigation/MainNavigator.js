import { TabNavigator, StackNavigator } from 'react-navigation'

/* ----- NAVIGATORS ----- */
import EventStack, { CreateEventStack } from './EventsNavigator'
import ChatStack, { NewChatStack } from './ChatsNavigator'

/* ----- SCREENS ----- */

const MainTabsNavigator = TabNavigator(
  {
    Events: { screen: EventStack },
    Chats: { screen: ChatStack },
  },
  {
    headerMode: 'none',
  },
)

export default StackNavigator(
  {
    Main: { screen: MainTabsNavigator },
    CreateEvent: { screen: CreateEventStack },
    NewChat: { screen: NewChatStack },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
)
