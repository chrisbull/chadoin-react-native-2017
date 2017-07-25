import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native'

import RoundedButton from '../Components/RoundedButton'

import ChatActions from '../Redux/ChatRedux'
import styles from './Styles/EventsScreenStyle'

class ChatMessagesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Messages',
  })

  constructor(props) {
    super(props)

    const messages = Object.keys(this.props.messages).map(key => ({
      ...this.props.messages[key],
      id: key,
    }))

    this.state = {
      messages,
    }
  }

  handleCreateMessage = () => {
    const { chat } = this.props
    const { messageText } = this.state
    const message = { message: messageText, created: new Date() }

    this.props.createMessage(chat, message)
  }

  render() {
    const { messages } = this.state

    return (
      <ScrollView style={styles.container}>
        <Text>
          {JSON.stringify(messages, null, 2)}
        </Text>
        {/* {messages.map(message =>
          <TouchableHighlight style={styles.card} key={message.id}>
            <View>
          <Text style={styles.title}>
          {JSON.stringify(message, null, 2)}
          </Text>
            </View>
          </TouchableHighlight>,
        )} */}
        <TextInput
          onChangeText={messageText => {
            this.setState({ messageText })
          }}
          placeholder="Message"
        />
        <RoundedButton onPress={this.handleCreateMessage} text="Send" />
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ chats }) => ({
  chat: chats.chat,
  messages: chats.chat.messages || [],
})

const mapDispatchToProps = dispatch => ({
  createMessage: (chat, message) =>
    dispatch(ChatActions.createMessageRequest(chat, message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessagesScreen)
