import { StackNavigator } from 'react-navigation'

/* ----- SCREENS ----- */

// Home
import HomeScreen from '../Containers/HomeScreen'

// Events
// import EventsListScreen from '../Containers/EventsListScreen'
import EventCreateScreen from '../Containers/EventCreateScreen'
import EventEditScreen from '../Containers/EventEditScreen'
import EventViewScreen from '../Containers/EventViewScreen'

// Chats
// import ChatsListScreen from '../Containers/ChatsListScreen'
import ChatCreateScreen from '../Containers/ChatCreateScreen'
import ChatMessagesScreen from '../Containers/ChatMessagesScreen'

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
