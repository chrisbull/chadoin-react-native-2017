import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  ActionSheetIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Switch,
  TouchableHighlight,
  DatePickerIOS,
} from 'react-native';
import { CustomActionSheet } from 'react-native-custom-action-sheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  inputContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  switchControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  switchLabel: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8,
    width: '50%',
  },
  switchInput: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
  },
  dateTimeView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTimeLabel: {
    lineHeight: 40,
    width: '33.3333%',
  },
  dateTimeDate: {
    lineHeight: 40,
    textAlign: 'right',
    width: '33.3333%',
  },
  dateTimeTime: {
    lineHeight: 40,
    textAlign: 'right',
    width: '33.3333%',
  },
  tappableLabel: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8,
  },
  textInput: {
    height: 40,
    paddingHorizontal: 8,
  },
});

export class NewEventScreen extends Component {
  state = {
    event: {},
    eventSwitch: 'All-day',
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true,
    dateTimeMode: 'datetime',
    startDateTime: new Date(),
    startDateTimeLabel: '',
  };

  getValue() {
    // this.setState({this.props.eventLocation: value});
    alert('the value is: ' + this.state.eventTitle);
  }

  onDateChange = date => {
    this.setState({
      startDateTime: date,
      startDateTimeLabel: '' + this.state.startDateTime,
    });
  };

  createOrUpdateEvent = () => {
    const { event } = this.state;
    const { updateEvent, createEvent } = this.props;

    event.id !== null ? updateEvent(event) : createEvent(event);
  };

  deleteEvent = () => {
    this.props.deleteEvent(this.state.event.id);
  };

  toggleDateTime = value => {
    this.state.eventSwitchIsOn
      ? this.setState({
          dateTimeMode: 'datetime',
          eventSwitchIsOn: false,
        })
      : this.setState({
          dateTimeMode: 'date',
          eventSwitchIsOn: true,
        });
  };

  updateEventTitle = title => {
    let { event } = this.state;
    event.title = title;

    this.setState({ event });
  };

  render() {
    const {
      event,
      eventSwitch,
      eventSwitchIsOn,
      startDateTime,
      dateTimeMode,
      timeZoneOffsetInHours,
    } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={this.updateEventTitle}
            value={event.title || ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <TouchableHighlight
            style={styles.tappableLabel}
            onPress={this.getValue}
          >
            <Text>
              {event.title || ''}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.switchControl}>
          <View style={styles.switchLabel}>
            <Text>
              {this.state.eventSwitch}
            </Text>
          </View>
          <View style={styles.switchInput}>
            <Switch
              onValueChange={this.toggleDateTime}
              value={this.state.eventSwitchIsOn}
            />
          </View>
        </View>

        <TouchableHighlight style={styles.tappableLabel}>
          <View style={styles.dateTimeView}>
            <Text style={styles.dateTimeLabel}>Start Time</Text>
            <Text style={styles.dateTimeDate}>
              {this.state.startDateTime.toLocaleDateString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </Text>
            {!this.state.eventSwitchIsOn &&
              <Text style={styles.dateTimeTime}>
                {this.state.startDateTime.toLocaleTimeString('en-us', {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </Text>}
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.tappableLabel}>
          <View style={styles.dateTimeView}>
            <Text style={styles.dateTimeLabel}>End Time</Text>
            <Text style={styles.dateTimeDate}>
              {this.state.startDateTime.toLocaleDateString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </Text>
            {!this.state.eventSwitchIsOn &&
              <Text style={styles.dateTimeTime}>
                {this.state.startDateTime.toLocaleTimeString('en-us', {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </Text>}
          </View>
        </TouchableHighlight>

        <DatePickerIOS
          date={this.state.startDateTime}
          mode={this.state.dateTimeMode}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />

        <TouchableHighlight style={styles.tappableLabel}>
          <Text>Invite Friends</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.tappableLabel}
          onPress={this.createOrUpdateEvent}
        >
          <Text>
            {event.id !== null ? 'Create Event' : 'Update Event'}
          </Text>
        </TouchableHighlight>

        {event.id !== null &&
          <TouchableHighlight
            style={styles.tappableLabel}
            onPress={this.deleteEvent}
          >
            <Text>Delete Event</Text>
          </TouchableHighlight>}
      </ScrollView>
    );
  }
}

NewEventScreen.navigationOptions = {
  title: 'New Event',
};

const mapStateToProps = state => ({
  // event: state.event,
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch({ type: 'CREATE_EVENT', ...event }),
  updateEvent: event => dispatch({ type: 'UPDATE_EVENT', ...event }),
  deleteEvent: id => dispatch({ type: 'DELETE_EVENT', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);
