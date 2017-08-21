import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native'
import EventActions from '../redux/EventRedux'
import LoginActions from '../redux/LoginRedux'
import FlatList from '../components/FlatList'
import { TintColor } from '../themes'

class EventsListScreen extends Component {
  static defaultProps = {
    data: [],
  }

  _onPressItem = item => this.props.gotoItem(item)

  render() {
    return <FlatList data={this.props.data} onPressItem={this._onPressItem} />
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
      color={TintColor}
    />
  ),
  headerLeft: (
    <Button
      title="Logout"
      onPress={() => {
        navigation.dispatch(LoginActions.logout())
      }}
      color={TintColor}
    />
  ),
})

const mapStateToProps = ({ events }) => ({
  data: events.list,
})

const mapDispatchToProps = dispatch => ({
  gotoItem: event => dispatch(EventActions.gotoEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsListScreen)
