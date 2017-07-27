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
  mainContainer: {
    ...ApplicationStyles.MainContainer.style,
  },
  listRowContainer: {
    padding: 12,
  },
  listRowTitle: {
    color: Colors.blueGreyMedium,
    fontWeight: '500',
  },
})

const tableRowUnderlayColor = 'rgba(0,0,0,0.3)'

class ChatsListScreen extends Component {
  render() {
    const { chats, gotoChat } = this.props

    return (
      <ScrollView style={styles.mainContainer}>
        {chats.map(chat =>
          <TouchableHighlight
            onPress={() => {
              gotoChat(chat)
            }}
            style={styles.listRowContainer}
            underlayColor={tableRowUnderlayColor}
            key={chat.id}
          >
            <Text style={styles.listRowTitle}>
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
