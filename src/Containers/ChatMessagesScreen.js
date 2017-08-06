import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
// import { BlurView } from 'react-native-blur'
// import {
//   KeyboardAccessoryView,
//   KeyboardUtils,
// } from 'react-native-keyboard-input'

import { KeyboardTrackingView } from 'react-native-keyboard-tracking-view'

// Redux
import ChatActions from '../Redux/ChatRedux'

// Components
import RoundedButton from '../Components/RoundedButton'
import Separator from '../Components/Separator'
import TimeAgo from '../Components/TimeAgo'

// Styles
import { ApplicationStyles } from '../Themes'

const styles = ApplicationStyles

// Helpers
const IsIOS = Platform.OS === 'ios'
const TrackInteractive = true

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
  //
  // onKeyboardItemSelected = (keyboardId, params) => {
  //   const receivedKeyboardData = `onItemSelected from "${keyboardId}"\nreceived params: ${JSON.stringify(
  //     params,
  //   )}`
  //   this.setState({ receivedKeyboardData })
  // }
  //
  // getToolbarButtons = () => {
  //   return [
  //     {
  //       text: 'show1',
  //       testID: 'show1',
  //       onPress: () =>
  //         this.showKeyboardView('KeyboardView', 'FIRST - 1 (passed prop)'),
  //     },
  //     {
  //       text: 'show2',
  //       testID: 'show2',
  //       onPress: () =>
  //         this.showKeyboardView(
  //           'AnotherKeyboardView',
  //           'SECOND - 2 (passed prop)',
  //         ),
  //     },
  //     {
  //       text: 'reset',
  //       testID: 'reset',
  //       onPress: () => this.resetKeyboardView(),
  //     },
  //   ]
  // }
  //
  // resetKeyboardView = () => {
  //   this.setState({ customKeyboard: {} })
  // }
  //
  // onKeyboardResigned = () => {
  //   this.resetKeyboardView()
  // }
  //
  // showKeyboardView = (component, title) => {
  //   this.setState({
  //     customKeyboard: {
  //       component,
  //       initialProps: { title },
  //     },
  //   })
  // }
  //
  // keyboardAccessoryViewContent = () => {
  //   const InnerContainerComponent = IsIOS && BlurView ? BlurView : View
  //   return (
  //     <InnerContainerComponent blurType="xlight" style={styles.blurContainer}>
  //       <View
  //         style={{
  //           borderTopWidth: StyleSheet.hairlineWidth,
  //           borderColor: '#bbb',
  //         }}
  //       />
  //       <View style={styles.inputContainer}>
  //         <AutoGrowingTextInput
  //           maxHeight={200}
  //           style={styles.textInput}
  //           ref={r => {
  //             this.textInputRef = r
  //           }}
  //           placeholder={'Message'}
  //           underlineColorAndroid="transparent"
  //           onFocus={() => this.resetKeyboardView()}
  //           testID={'input'}
  //         />
  //         <TouchableOpacity
  //           style={styles.sendButton}
  //           onPress={() => KeyboardUtils.dismiss()}
  //         >
  //           <Text>Action</Text>
  //         </TouchableOpacity>
  //       </View>
  //       <View style={{ flexDirection: 'row' }}>
  //         {this.getToolbarButtons().map((button, index) =>
  //           <TouchableOpacity
  //             onPress={button.onPress}
  //             style={{ paddingLeft: 15, paddingBottom: 10 }}
  //             key={index}
  //             testID={button.testID}
  //           >
  //             <Text>
  //               {button.text}
  //             </Text>
  //           </TouchableOpacity>,
  //         )}
  //       </View>
  //     </InnerContainerComponent>
  //   )
  // }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <ScrollView>
          <FlatList
            style={styles.listContainer}
            keyExtractor={item => item.id}
            data={this.state.messages}
            renderItem={this._renderItem}
            ItemSeparatorComponent={({ highlighted }) =>
              <Separator highlighted={highlighted} />}
          />
          <RoundedButton onPress={this.handleCreateMessage} text="Send" />
        </ScrollView>
        <KeyboardTrackingView styles={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={messageText => {
              this.setState({ messageText })
            }}
            value={this.state.messageText}
            placeholder="Message"
            autoFocus
            multiline
          />
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
  messages: chats.chat.messages || [],
})

const mapDispatchToProps = dispatch => ({
  createMessage: (chat, message) =>
    dispatch(ChatActions.createMessageRequest(chat, message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessagesScreen)
