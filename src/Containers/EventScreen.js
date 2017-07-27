import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
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
import { ApplicationStyles } from '../Themes/'
import EventActions from '../Redux/EventRedux'
import RoundedButton from '../Components/RoundedButton'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.styles,
  },
})

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

class EventScreen extends Component {
  state = {
    title: (this.props.event && this.props.event.title) || '',
    allDay: (this.props.event && this.props.event.allDay) || false,
    startDateTime:
      (this.props.event && new Date(this.props.event.startDateTime)) ||
      tomorrow,
    endDateTime:
      (this.props.event && new Date(this.props.event.endDateTime)) || tomorrow,
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

  updateEventTitle = title => {
    this.setState({ title })
  }

  handleCreate = () => {
    const { event, createEvent, updateEvent } = this.props
    const { title, allDay, startDateTime, endDateTime } = this.state

    console.log(this.state)

    const newEvent = {
      ...this.props.event,
      title,
      allDay,
      startDateTime: startDateTime.toString(),
      endDateTime: endDateTime.toString(),
    }

    return event && event.id ? updateEvent(newEvent) : createEvent(newEvent)
  }

  render() {
    const {
      title,
      allDay,
      startDateTime,
      endDateTime,
      timeZoneOffsetInHours,
      saving,
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
      <ScrollView style={styles.mainContainer}>
        <View style={styles.contentContainer}>
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
          <RoundedButton onPress={this.handleCreate}>
            {saving ? 'Saving...' : title ? 'Update Event' : 'Create Event'}
          </RoundedButton>
        </View>
      </ScrollView>
    )
  }
}

EventScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Event',
    headerLeft: <Button title="Cancel" onPress={() => navigation.goBack()} />,
    headerRight: <Button title="Create" onPress={() => {}} />,
  }
}

const mapStateToProps = ({ events }) => ({
  event: events.event,
  saving: events.saving,
})

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(EventActions.createEventRequest(event)),
  updateEvent: event => dispatch(EventActions.updateEventRequest(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen)
