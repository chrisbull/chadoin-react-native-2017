import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import ChatActions from '../Redux/ChatRedux'
import { Colors, ApplicationStyles } from '../Themes/'

const styles = StyleSheet.create({
  container: {
    ...ApplicationStyles.MainContainer.styles,
    backgroundColor: Colors.purple,
  },
  tableRow: {
    padding: 12,
  },
  tableRowTitle: {
    color: 'white',
  },
})

const tableRowUnderlayColor = 'rgba(0,0,0,0.3)'

class ChatsListScreen extends Component {
  render() {
    const { chats, gotoChat } = this.props

    return (
      <ScrollView style={styles.container}>
        {chats.map(chat =>
          <TouchableHighlight
            onPress={() => {
              gotoChat(chat)
            }}
            style={styles.tableRow}
            underlayColor={tableRowUnderlayColor}
            key={chat.id}
          >
            <Text style={styles.tableRowTitle}>
              {chat.title || ''}
            </Text>
          </TouchableHighlight>,
        )}
      </ScrollView>
    )
  }
}

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
