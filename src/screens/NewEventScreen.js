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
    event: this.props.event || {},
  };

  componentDidMount() {
    console.log('NewEventScreen', this.props.event, this.state.event);
  }

  // -- Event hanlders

  getValue() {
    // this.setState({this.props.eventLocation: value});
    alert('the value is: ' + this.state.eventTitle);
  }

  onDateChange = date => {
    let { event } = this.state;
    event.startDateTime = date;

    this.setState({ event });
  };

  createOrUpdateEvent = () => {
    const { event } = this.state;
    const { updateEvent, createEvent } = this.props;

    event.id ? updateEvent(event) : createEvent(event);
  };

  deleteEvent = () => {
    this.props.deleteEvent(this.state.event.id);
  };

  toggleDateTime = value => {
    let { event } = this.state;
    event.isAllDay = value;
    this.setState({ event });
  };

  updateEventTitle = title => {
    let { event } = this.state;
    event.title = title;

    this.setState({ event });
  };

  render() {
    const { event, timeZoneOffsetInHours } = this.state;
    const {
      id = null,
      title = '',
      isAllDay = false,
      startDateTime = new Date(),
    } = event;

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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={this.updateEventTitle}
            value={title}
          />
        </View>

        <View style={styles.inputContainer}>
          <TouchableHighlight
            style={styles.tappableLabel}
            onPress={this.getValue}
          >
            <Text>
              {title}
            </Text>
          </TouchableHighlight>
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
          onPress={this.createOrUpdateEvent}
        >
          <Text>
            {id ? 'Update Event' : 'Create Event'}
          </Text>
        </TouchableHighlight>

        {id &&
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
  event: state.event,
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch({ type: 'CREATE_EVENT', ...event }),
  updateEvent: event => dispatch({ type: 'UPDATE_EVENT', ...event }),
  deleteEvent: id => dispatch({ type: 'DELETE_EVENT', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);
