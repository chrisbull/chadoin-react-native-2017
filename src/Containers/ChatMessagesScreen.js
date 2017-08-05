import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ApplicationStyles } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import ChatActions from '../Redux/ChatRedux'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.styles,
  },
})

class ChatMessagesScreen extends Component {
  state = {
    messageText: '',
  }

  handleCreateMessage = () => {
    const { chat } = this.props
    const { messageText } = this.state

    if (messageText !== '') {
      const message = { message: messageText, created: new Date() }

      this.props.createMessage(chat, message)
      this.setState({ messageText: '' })
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.mainContainer}>
        {Object.keys(this.props.messages)
          .map(key => ({
            ...this.props.messages[key],
            id: key,
          }))
          .map(message =>
            <TouchableHighlight key={message.id}>
              <View>
                <Text>
                  {message.message}
                </Text>
              </View>
            </TouchableHighlight>,
          )}
        <TextInput
          onChangeText={messageText => {
            this.setState({ messageText })
          }}
          value={this.state.messageText}
          placeholder="Message"
          autoFocus
          multiline
        />
        <RoundedButton onPress={this.handleCreateMessage} text="Send" />
      </KeyboardAwareScrollView>
    )
  }
}

ChatMessagesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Messages',
  tabBarVisible: false,
})

const mapStateToProps = ({ chats }) => ({
  chat: chats.chat,
  messages: chats.chat.messages || [],
})

const mapDispatchToProps = dispatch => ({
  createMessage: (chat, message) =>
    dispatch(ChatActions.createMessageRequest(chat, message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessagesScreen)
