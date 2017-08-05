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
import EventActions from '../Redux/EventRedux'
import LoginActions from '../Redux/LoginRedux'

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

class EventsListScreen extends Component {
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

EventsListScreen.navigationOptions = ({ navigation }) => ({
  title: 'Events',
  headerRight: (
    <Button
      title="New"
      onPress={() => {
        navigation.dispatch(EventActions.gotoNewEvent())
      }}
    />
  ),
  headerLeft: (
    <Button
      title="Logout"
      onPress={() => {
        navigation.dispatch(LoginActions.logout())
      }}
    />
  ),
})

const mapStateToProps = ({ events }) => ({
  items: events.list,
})

const mapDispatchToProps = dispatch => ({
  gotoItem: event => dispatch(EventActions.gotoEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsListScreen)
