import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { ApplicationStyles } from '../Themes'
import ChatActions from '../Redux/ChatRedux'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.style,
  },
  listView: {
    ...ApplicationStyles.ListView.style,
  },
  listViewRow: {
    ...ApplicationStyles.ListViewRow.containerStyle,
  },
  listViewRowTitle: {
    ...ApplicationStyles.ListViewRow.titleStyle,
  },
})

class MyListItem extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.item)
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._onPress}
        style={styles.listViewRow}
        underlayColor={ApplicationStyles.ListViewRow.underlayColor}
      >
        <Text style={styles.listViewRowTitle}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    )
  }
}

class ChatsListScreen extends Component {
  static defaultProps = {
    items: [],
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = item => this.props.gotoItem(item)

  _renderItem = ({ item }) =>
    <MyListItem
      onPressItem={this._onPressItem}
      title={item.title}
      item={item}
    />

  render() {
    return (
      <FlatList
        style={styles.mainContainer}
        data={this.props.items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
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
  items: chats.list,
})

const mapDispatchToProps = dispatch => ({
  gotoItem: chat => dispatch(ChatActions.gotoChat(chat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListScreen)
