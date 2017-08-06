import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ChatActions from '../Redux/ChatRedux'
import RoundedButton from '../Components/RoundedButton'
import Separator from '../Components/Separator'
import TimeAgo from '../Components/TimeAgo'
import { ApplicationStyles } from '../Themes'

const styles = ApplicationStyles

class ChatMessagesScreen extends Component {
  static defaultProps = {
    messages: [],
  }

  state = {
    messages: this.formatMessages(this.props.messages),
    messageText: '',
  }

  componentWillReceiveProps(props) {
    this.setState({
      messages: this.formatMessages(props.messages),
    })
  }

  formatMessages(messages) {
    return Object.keys(messages).map(key => ({
      ...messages[key],
      id: key,
    }))
  }

  handleCreateMessage = () => {
    const { chat } = this.props
    const { messageText } = this.state

    if (messageText !== '') {
      const message = {
        message: messageText.trim(),
        created: new Date().toString(),
      }

      this.props.createMessage(chat, message)
      this.setState({ messageText: '' })
    }
  }

  _renderItem({ item }) {
    return (
      <TouchableHighlight style={styles.messageRow} onLongPress={() => {}}>
        <View>
          <Text style={styles.messageRowText}>
            {`${item.message.trim()}`}
          </Text>
          {item.created && <TimeAgo time={item.created} />}
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <FlatList
          style={styles.mainContainer}
          keyExtractor={item => item.id}
          data={this.state.messages}
          renderItem={this._renderItem}
          ItemSeparatorComponent={({ highlighted }) =>
            <Separator highlighted={highlighted} />}
        />
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
