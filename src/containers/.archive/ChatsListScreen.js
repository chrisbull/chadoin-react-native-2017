import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native'
import ChatActions from '../redux/ChatRedux'
import FlatList from '../components/FlatList'
import { TintColor } from '../theme'

class ChatsListScreen extends Component {
  static defaultProps = {
    data: [],
  }

  _onPressItem = item => this.props.gotoItem(item)

  render() {
    return <FlatList data={this.props.data} onPressItem={this._onPressItem} />
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
        color={TintColor}
      />
    ),
  }
}

const mapStateToProps = ({ chats }) => ({
  data: chats.list,
})

const mapDispatchToProps = dispatch => ({
  gotoItem: chat => dispatch(ChatActions.gotoChat(chat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListScreen)
