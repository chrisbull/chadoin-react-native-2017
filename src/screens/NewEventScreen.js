import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ActionSheetIOS, StyleSheet, Text, TextInput, View, ScrollView, Switch, TouchableHighlight, DatePickerIOS } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  inputContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  switchControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  switchLabel: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8,
    width: '50%'
  },
  switchInput: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15
  },
  tappableLabel: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8
  },
  textInput: {
    height: 40,
    paddingHorizontal: 8,
  }
});

export class NewEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: '',
      eventSwitch: 'All-day',
      eventSwitchIsOn: false,
      eventSwitchRegressionIsOn: true,
      dateTimeMode: 'datetime',
      startDateTime: new Date(),
      startDateTimeLabel: '',
    };

    this.getValue = this.getValue.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.toggleDateTime = this.toggleDateTime.bind(this);
  }

  getValue() {
    // this.setState({this.props.eventLocation: value});
    alert('the value is: ' + this.state.eventTitle);
  }

  onDateChange = (date) => {
    this.setState({startDateTime: date});
    this.setState({startDateTimeLabel: '' + this.state.startDateTime});
  }

  toggleDateTime = (value) => {
    (this.state.eventSwitchIsOn) ? this.setState({dateTimeMode: 'datetime'}) : this.setState({dateTimeMode: 'date'});
    (this.state.eventSwitchIsOn) ? this.setState({eventSwitchIsOn: false}) : this.setState({eventSwitchIsOn: true});
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput}
            placeholder='Title'
            onChangeText={(text) => this.setState({eventTitle: text})}
            // onChangeText={(eventTitle) => this.changeValue(eventTitle)}
            value={this.state.eventTitle} />
        </View>

        <View style={styles.inputContainer}>
          <TouchableHighlight style={styles.tappableLabel}
            onPress={this.getValue} >
            <Text>{this.state.eventTitle}</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.switchControl}>
          <View style={styles.switchLabel}>
            <Text>{this.state.eventSwitch}</Text>
          </View>
          <View style={styles.switchInput}>
            <Switch
              onValueChange={this.toggleDateTime}
              value={this.state.eventSwitchIsOn} />
          </View>
        </View>

        <TouchableHighlight style={styles.tappableLabel}>
          <View>
            <Text>Start Time</Text>
            <Text>{this.state.startDateTime.toLocaleDateString('en-us', {month: 'long', day: 'numeric', year: 'numeric'})}</Text>
            <Text>{this.state.startDateTime.toLocaleTimeString('en-us', {hour: 'numeric', minute: '2-digit'})}</Text>
            {/* <Text>{'' + this.state.startDateTimeLabel}</Text> */}
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.tappableLabel}>
          <Text>{'' + this.state.startDateTimeLabel}</Text>
        </TouchableHighlight>

        <DatePickerIOS
          date={this.state.startDateTime}
          mode={this.state.dateTimeMode}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange} />

        <TouchableHighlight style={styles.tappableLabel}>
          <Text>Invite Friends</Text>
        </TouchableHighlight>

      </ScrollView>
    );
  }
}

NewEventScreen.navigationOptions = {
  title: 'New Event',
};

export default NewEventScreen;
