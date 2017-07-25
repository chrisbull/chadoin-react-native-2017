import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import EventActions from '../Redux/EventRedux'
import styles from './Styles/EventsScreenStyle'

class EventsListScreen extends Component {
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
            navigation.dispatch(EventActions.gotoEvent())
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
              this.props.gotoEvent(event)
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
        <RoundedButton
          onPress={() => {
            this.props.gotoEvent()
          }}
        >
          Add New Event
        </RoundedButton>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ events }) => ({
  events: events.events,
})

const mapDispatchToProps = dispatch => ({
  gotoEvent: event => dispatch(EventActions.gotoEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsListScreen)
