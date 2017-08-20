import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { ApplicationStyles } from '../themes'
import EventActions from '../redux/EventRedux'
import RoundedButton from '../components/RoundedButton'

const styles = ApplicationStyles

class EventScreen extends Component {
  render() {
    const { title, allDay, startDateTime, endDateTime } = this.props.event

    const startDate = new Date(startDateTime).toLocaleTimeString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    const startTime = new Date(startDateTime).toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: '2-digit',
    })

    const endDate = new Date(endDateTime).toLocaleTimeString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    const endTime = new Date(endDateTime).toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: '2-digit',
    })

    return (
      <ScrollView style={styles.mainContainer}>
        <Text>
          {title}
        </Text>
        <View style={styles.dateTimeView}>
          <Text style={styles.dateTimeLabel}>Start Time</Text>
          <Text style={styles.dateTimeDate}>
            {startDate}
          </Text>
          {!allDay &&
            <Text style={styles.dateTimeTime}>
              {startTime}
            </Text>}
        </View>
        <View style={styles.dateTimeView}>
          <Text style={styles.dateTimeLabel}>End Time</Text>
          <Text style={styles.dateTimeDate}>
            {endDate}
          </Text>
          {!allDay &&
            <Text style={styles.dateTimeTime}>
              {endTime}
            </Text>}
        </View>
        <RoundedButton onPress={this.props.gotoEditEvent}>
          Edit Event
        </RoundedButton>
      </ScrollView>
    )
  }
}

EventScreen.navigationOptions = ({ navigation }) => ({
  title: 'Event Details',
  tabBarVisible: false,
})

const mapStateToProps = ({ events }) => ({
  event: events.event,
  saving: events.saving,
})

const mapDispatchToProps = dispatch => ({
  gotoEditEvent: () => dispatch(EventActions.gotoEditEvent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen)
