import { StackNavigator } from 'react-navigation'

/* ----- SCREENS ----- */

// Home
import HomeScreen from '../containers/HomeScreen'

// Events
// import EventsListScreen from '../containers/EventsListScreen'
import EventCreateScreen from '../containers/EventCreateScreen'
import EventEditScreen from '../containers/EventEditScreen'
import EventViewScreen from '../containers/EventViewScreen'

// Chats
// import ChatsListScreen from '../containers/ChatsListScreen'
import ChatCreateScreen from '../containers/ChatCreateScreen'
import ChatMessagesScreen from '../containers/ChatMessagesScreen'

const HomeStack = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },

    // Events
    ViewEvent: { screen: EventViewScreen },
    EditEvent: { screen: EventEditScreen },

    // Chats
    ChatCreate: { screen: ChatCreateScreen },
    ChatMessages: { screen: ChatMessagesScreen },
  },
  {
    // headerMode: 'none',
  },
)

export default StackNavigator(
  {
    Home: { screen: HomeStack },
    CreateEvent: { screen: EventCreateScreen },
    NewChat: { screen: ChatCreateScreen },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
)
