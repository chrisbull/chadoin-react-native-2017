import React, { Component } from 'react'
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

export class ChatsListScreen extends Component {
  static defaultProps = {
    chats: [],
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Chats',
      headerRight: (
        <Button
          title="New"
          onPress={() => {
            navigation.dispatch(ChatActions.gotoCreateChat())
          }}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.chats.map(chat =>
          <TouchableHighlight
            onPress={() => {
              this.props.gotoChat(chat)
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
    )
  }
}

const mapStateToProps = ({ chats }) => ({
  chats: chats.chats,
})

const mapDispatchToProps = dispatch => ({
  gotoChat: chat => dispatch(ChatActions.gotoChat(chat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListScreen)
