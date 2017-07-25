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

export class ChatMessageScreen extends Component {
  state = {
    messageText: '',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Messages',
    }
  }

  updateMessageText = messageText => {
    this.setState({ messageText })
  }

  handleSendMessage = () => {
    const { chat } = this.props
    const { messageText } = this.state
    const message = { message: messageText, created: new Date() }

    console.log('handleSendMessage', chat, message)
    this.props.createMessage({ chat, message })
  }

  render() {
    const { chat = {} } = this.props
    return (
      <ScrollView style={styles.container}>
        {/* {chat.messages &&
          chat.messages.map(message =>
            <TouchableHighlight style={styles.card} key={message.id}>
          <View>
          <Text style={styles.title}>
          {message.message}
          </Text>
          </View>
            </TouchableHighlight>,
        )} */}
        <TextInput
          onChangeText={this.updateMessageText}
          placeholder="Message"
        />
        <RoundedButton
          onPress={() => {
            this.handleSendMessage()
          }}
        >
          SEND
        </RoundedButton>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ chats }) => ({
  chat: chats.chat,
})

const mapDispatchToProps = dispatch => ({
  createMessage: ({ chat, message }) =>
    dispatch(ChatActions.createMessageRequest({ chat, message })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageScreen)
