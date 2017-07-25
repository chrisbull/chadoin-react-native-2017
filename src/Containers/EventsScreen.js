import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native'

import EventActions from '../Redux/EventRedux'
import styles from './Styles/EventsScreenStyle'

export class EventsScreen extends Component {
  static defaultProps = {
    events: [],
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Events',
      headerRight: (
        <Button
          title="New"
          onPress={() => {
            navigation.dispatch(EventActions.newEvent())
          }}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.events.map(event =>
          <TouchableHighlight
            onPress={() => {
              this.props.editEvent(event)
            }}
            style={styles.card}
            key={event.id}
          >
            <View>
              <Text style={styles.title}>
                {event.title || ''}
              </Text>
              <Text style={styles.startDate}>
                {event.startDateTime || ''}
              </Text>
            </View>
          </TouchableHighlight>,
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
})

const mapDispatchToProps = dispatch => ({
  editEvent: event => dispatch(EventActions.editEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
