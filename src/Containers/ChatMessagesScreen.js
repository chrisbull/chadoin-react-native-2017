import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Platform,
  StyleSheet,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardTrackingView } from 'react-native-keyboard-tracking-view'
import { BlurView } from 'react-native-blur'

// Redux
import ChatActions from '../Redux/ChatRedux'

// Components
import RoundedButton from '../Components/RoundedButton'
import TextLink from '../Components/TextLink'
import TableSeparator from '../Components/TableSeparator'
import TimeAgo from '../Components/TimeAgo'

// Styles
import { ApplicationStyles, Colors, Metrics, Borders } from '../Themes'

const appStyles = ApplicationStyles

const styles = StyleSheet.create({
  mainContainer: {
    ...appStyles.mainContainer,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    position: 'relative',
  },
  inputContainerBorder: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Borders.borderColor,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  textInput: {
    ...appStyles.body,
    flex: 1,
    paddingTop: Metrics.spacing.regular,
    paddingBottom: Metrics.spacing.medium,
    paddingLeft: Metrics.spacing.regular,
    paddingRight: Metrics.spacing.regular,
  },
  sendButton: {
    padding: Metrics.spacing.small,
    ...Borders.defaultStyleRadius,
    marginRight: Metrics.spacing.small,
  },
  messageRow: {
    padding: Metrics.spacing.regular,
  },
  messageText: {
    ...appStyles.bodyBold,
  },
  messageTimeAgo: {
    ...appStyles.smallLight,
    marginTop: Metrics.spacing.small,
  },
})

class ChatMessagesScreen extends Component {
  static defaultProps = {
    messages: [],
  }

  state = {
    messages: this.formatMessages(this.props.messages),
    messageText: '',
    customKeyboard: {
      component: undefined,
      initialProps: undefined,
    },
    receivedKeyboardData: undefined,
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

  _sendMessage = () => {
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
          <Text style={styles.messageText}>
            {`${item.message.trim()}`}
          </Text>
          {item.created &&
            <TimeAgo style={styles.messageTimeAgo} time={item.created} />}
        </View>
      </TouchableHighlight>
    )
  }

  _onChangeText = messageText => {
    this.setState({ messageText })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView>
          <FlatList
            scrollToEnd
            getItemLayout={(data, index) => ({
              length: 50,
              offset: 50 * index,
              index,
            })}
            style={styles.listContainer}
            keyExtractor={item => item.id}
            data={this.state.messages}
            renderItem={this._renderItem}
            ItemSeparatorComponent={({ highlighted }) =>
              <TableSeparator highlighted={highlighted} />}
          />
        </KeyboardAwareScrollView>
        <KeyboardTrackingView>
          <View style={styles.inputContainer}>
            <View style={styles.inputContainerBorder} />
            <TextInput
              style={styles.textInput}
              onChangeText={this._onChangeText}
              value={this.state.messageText}
              placeholder="Message"
              autoFocus
              multiline
            />
            <TextLink
              title="Send"
              style={styles.sendButton}
              onPress={this._sendMessage}
            />
          </View>
        </KeyboardTrackingView>
      </View>
    )
  }
}

ChatMessagesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Messages',
  tabBarVisible: false,
})

const mapStateToProps = ({ chats }) => ({
  chat: chats.chat,
  messages: (chats.chat && chats.chat.messages) || [],
})

const mapDispatchToProps = dispatch => ({
  createMessage: (chat, message) =>
    dispatch(ChatActions.createMessageRequest(chat, message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessagesScreen)
