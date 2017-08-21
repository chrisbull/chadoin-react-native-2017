import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DatePickerIOS,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EventActions from '../redux/EventRedux'
import RoundedButton from '../components/RoundedButton'
import { ApplicationStyles } from '../themes'

const styles = ApplicationStyles

class EventScreen extends Component {
  state = {
    id: this.props.event.id,
    title: this.props.event.title,
    allDay: this.props.event.allDay,
    startDateTime: new Date(this.props.event.startDateTime),
    endDateTime: new Date(this.props.event.endDateTime),
    date: new Date(),
    timeZoneOffsetInHours: -1 * new Date().getTimezoneOffset() / 60,
    startDateTimePickerVisible: false,
    endDateTimePickerVisible: false,
  }

  // -- Event handlers

  toggleDateTime = allDay => {
    this.setState({ allDay })
  }

  // -- Save Handler
  handleUpdate = () => {
    const { updateEvent } = this.props
    const { title, allDay, startDateTime, endDateTime } = this.state

    const newEvent = {
      ...this.props.event,
      title,
      allDay,
      startDateTime: startDateTime.toString(),
      endDateTime: endDateTime.toString(),
    }

    return updateEvent(newEvent)
  }

  handleDelete = () => {
    const { event, deleteEvent } = this.props
    deleteEvent(event)
  }

  render() {
    const {
      id,
      title,
      allDay,
      startDateTime,
      endDateTime,
      timeZoneOffsetInHours,
      startDateTimePickerVisible,
      endDateTimePickerVisible,
    } = this.state

    const startDate = startDateTime.toLocaleTimeString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    const startTime = startDateTime.toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: '2-digit',
    })

    const endDate = endDateTime.toLocaleTimeString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    const endTime = endDateTime.toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: '2-digit',
    })

    return (
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          onChangeText={this.updateEventTitle}
          value={title}
        />

        <View style={styles.switchControl}>
          <View style={styles.switchLabel}>
            <Text>
              {allDay}
            </Text>
          </View>
          <View style={styles.switchInput}>
            <Switch onValueChange={this.toggleDateTime} value={allDay} />
          </View>
        </View>

        <TouchableWithoutFeedback
          style={styles.tappableLabel}
          onPress={() => {
            this.setState({
              startDateTimePickerVisible: !startDateTimePickerVisible,
            })
          }}
        >
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
        </TouchableWithoutFeedback>

        <View
          style={{
            height: startDateTimePickerVisible ? 'auto' : 0,
            overflow: 'hidden',
          }}
        >
          <DatePickerIOS
            date={startDateTime}
            mode={allDay ? 'date' : 'datetime'}
            timeZoneOffsetInMinutes={timeZoneOffsetInHours * 60}
            onDateChange={date => this.setState({ startDateTime: date })}
          />
        </View>

        <TouchableWithoutFeedback
          style={styles.tappableLabel}
          onPress={() => {
            this.setState({
              endDateTimePickerVisible: !endDateTimePickerVisible,
            })
          }}
        >
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
        </TouchableWithoutFeedback>

        <View
          style={{
            height: endDateTimePickerVisible ? 'auto' : 0,
            overflow: 'hidden',
          }}
        >
          <DatePickerIOS
            date={endDateTime}
            mode={allDay ? 'date' : 'datetime'}
            timeZoneOffsetInMinutes={timeZoneOffsetInHours * 60}
            onDateChange={date => this.setState({ endDateTime: date })}
          />
        </View>

        <TouchableHighlight style={styles.tappableLabel}>
          <Text>Invite Friends</Text>
        </TouchableHighlight>
        <RoundedButton onPress={this.handleUpdate}>Update Event</RoundedButton>
        {id
          ? <RoundedButton onPress={this.handleDelete}>
              Delete Event
            </RoundedButton>
          : null}
      </KeyboardAwareScrollView>
    )
  }
}

EventScreen.navigationOptions = ({ navigation }) => ({
  title: 'Edit Event',
  tabBarVisible: false,
})

const mapStateToProps = ({ events }) => ({
  event: events.event,
  saving: events.saving,
})

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(EventActions.createEventRequest(event)),
  updateEvent: event => dispatch(EventActions.updateEventRequest(event)),
  deleteEvent: event => dispatch(EventActions.deleteEventRequest(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen)
