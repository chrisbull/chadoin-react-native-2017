import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import EventActions from '../Redux/EventRedux'
import styles from './Styles/EventsScreenStyle'

export class EventsScreen extends Component {
  static defaultProps = {
    events: []
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Events',
      headerRight: (
        <Button
          title='New'
          onPress={() => navigation.navigate('EventScreen')}
        />
      )
    }
  }

  componentWillMount () {
    console.tron.log('EventsScreen -> componentWillMount() syncEvents')
    this.props.syncEvents()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>
          {JSON.stringify(this.props.events, null, 2)}
        </Text>
        {this.props.events.map(event => (
          <TouchableHighlight
            onPress={() => this.props.editEvent(event)}
            style={styles.card}
          >
            <View>
              <Text style={styles.title}>
                {event.title || ''}
              </Text>
              <Text style={styles.startDate}>
                {event.startDateTime || ''}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events.events
})

const mapDispatchToProps = dispatch => ({
  editEvent: () => {},
  newEvent: () => {},
  syncEvents: () => dispatch(EventActions.syncEvents())
  // editEvent: event => dispatch({ type: 'EVENT_EDIT', ...event }),
  // newEvent: events => dispatch({ type: 'EVENT_NEW', ...events }),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
