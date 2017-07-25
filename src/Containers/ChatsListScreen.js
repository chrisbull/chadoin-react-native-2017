import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native'
import ChatActions from '../Redux/ChatRedux'
import styles from './Styles/EventsScreenStyle'

const ChatsListScreen = ({ chats, gotoChat }) =>
  <ScrollView style={styles.container}>
    {chats.map(chat =>
      <TouchableHighlight
        onPress={() => {
          gotoChat(chat)
        }}
        style={styles.card}
        key={chat.id}
      >
        <View>
          <Text style={styles.title}>
            {chat.title || ''}
          </Text>
        </View>
      </TouchableHighlight>,
    )}
  </ScrollView>

ChatsListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Chats',
    headerRight: (
      <Button
        title="New"
        onPress={() => {
          navigation.dispatch(ChatActions.gotoNewChat())
        }}
      />
    ),
  }
}

const mapStateToProps = ({ chats }) => ({
  chats: chats.list || [],
})

const mapDispatchToProps = dispatch => ({
  gotoChat: chat => dispatch(ChatActions.gotoChat(chat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListScreen)
