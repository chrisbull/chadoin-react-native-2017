import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

import RoundedButton from '../Components/RoundedButton'

import EventActions from '../Redux/EventRedux'

import styles from './Styles/EventScreenStyle'

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

class EventScreen extends Component {
  state = {
    date: new Date(),
    title: (this.props.event && this.props.event.title) || '',
  }

  static navigationOptions = ({ navigation }) => {
    console.log('EventScreen -> navigationOptions navigation', navigation)

    return {
      title: 'Event',
      headerLeft: <Button title="Cancel" onPress={() => navigation.goBack()} />,
      headerRight: <Button title="Create" onPress={() => {}} />,
    }
  }

  updateEventTitle = title => {
    this.setState({ title })
  }

  handleCreate = () => {
    const { event, createEvent, updateEvent } = this.props
    const { title } = this.state

    const newEvent = {
      ...this.props.event,
      title,
    }

    return event && event.id ? updateEvent(newEvent) : createEvent(newEvent)
  }

  render() {
    const { date, title } = this.state
    const { event, saving } = this.props

    return (
      <ScrollView style={styles.container}>
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
                {/* {isAllDay} */}
              </Text>
            </View>
            <View style={styles.switchInput}>
              <Switch value="true" />
            </View>
          </View>

          <TouchableHighlight style={styles.tappableLabel}>
            <View style={styles.dateTimeView}>
              <Text style={styles.dateTimeLabel}>Start Time</Text>
              <Text style={styles.dateTimeDate}>
                {/* {startDate} */}
              </Text>
              {/* {!isAllDay && */}
              <Text style={styles.dateTimeTime}>
                {/* {startTime} */}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.tappableLabel}>
            <View style={styles.dateTimeView}>
              <Text style={styles.dateTimeLabel}>End Time</Text>
              <Text style={styles.dateTimeDate}>
                {/* {startDate} */}
              </Text>
              {/* {!isAllDay && */}
              <Text style={styles.dateTimeTime}>
                {/* {startTime} */}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.tappableLabel}>
            <Text>Invite Friends</Text>
          </TouchableHighlight>

          <RoundedButton onPress={this.handleCreate}>
            {saving
              ? 'Saving...'
              : event && event.id ? 'Update Event' : 'Create Event'}
          </RoundedButton>
        </View>
      </ScrollView>
    )
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

/*
                export class EventScreen extends Component {

                static navigationOptions = {
                title: 'New Event',
                };

                state = {
                date: new Date(),
                timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
                };

                // -- Event handlers
                updateEventTitle = title => {
                let { newEvent } = this.props;
                newEvent.title = title;
                this.props.changeNewEvent(newEvent)
                };

                toggleDateTime = isAllDay => {
                let { newEvent } = this.props;
                newEvent.isAllDay = isAllDay;
                this.props.changeNewEvent(newEvent)
                };

                onDateChange = startDateTime => {
                let { newEvent } = this.props;
                newEvent.startDateTime = startDateTime;
                this.props.changeNewEvent(newEvent)
                };

                // -- Save Handler
                handleSaveNewEventPress = () => {
                this.props.saveNewEvent(this.props.newEvent);
                };

                render() {
                const { date, timeZoneOffsetInHours } = this.state;
                const { newEvent = {} } = this.props;
                const {
                title = '',
                startDateTime = date,
                isAllDay = false,
                } = newEvent;

                const startDate = startDateTime.toLocaleTimeString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                });

                const startTime = startDateTime.toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: '2-digit',
                });

                return (
                <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                <TextInput
                style={styles.textInput}
                placeholder="Title"
                onChangeText={this.updateEventTitle}
                value={title}
            />
          </View>

          <View style={styles.switchControl}>
            <View style={styles.switchLabel}>
              <Text>
                {isAllDay}
              </Text>
            </View>
            <View style={styles.switchInput}>
              <Switch onValueChange={this.toggleDateTime} value={isAllDay} />
            </View>
          </View>

          <TouchableHighlight style={styles.tappableLabel}>
            <View style={styles.dateTimeView}>
              <Text style={styles.dateTimeLabel}>Start Time</Text>
              <Text style={styles.dateTimeDate}>
                {startDate}
              </Text>
              {!isAllDay &&
                <Text style={styles.dateTimeTime}>
                  {startTime}
                </Text>}
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.tappableLabel}>
            <View style={styles.dateTimeView}>
              <Text style={styles.dateTimeLabel}>End Time</Text>
              <Text style={styles.dateTimeDate}>
                {startDate}
              </Text>
              {!isAllDay &&
                <Text style={styles.dateTimeTime}>
                  {startTime}
                </Text>}
            </View>
          </TouchableHighlight>

          <DatePickerIOS
            date={startDateTime}
            mode={isAllDay ? 'date' : 'datetime'}
            timeZoneOffsetInMinutes={timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />

          <TouchableHighlight style={styles.tappableLabel}>
            <Text>Invite Friends</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tappableLabel}
            onPress={this.handleSaveNewEventPress}
          >
            <Text>
              Create Event
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
*/
