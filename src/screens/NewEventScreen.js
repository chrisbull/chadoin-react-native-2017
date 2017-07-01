import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ActionSheetIOS, StyleSheet, Text, TextInput, View, ScrollView, Switch, TouchableHighlight, DatePickerIOS } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  switchControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  switchLabel: {
    borderColor: 'gray',
    borderWidth: 1,
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
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 8,
  }
});

class NewEventScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <TextBox />
        <TappableLabel text='Location'/>
        <CustomSwitch label='All-day' />
        <TappableLabel text='Start StartTime' />
        <TappableLabel text='End DateTime' />
        <TappableLabel text='Invite Friends' />
      </ScrollView>
    );
  }
}

class CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <View>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}

class CustomSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      eventSwitchIsOn: false,
      eventSwitchRegressionIsOn: true,
    }
  }

  render() {
    return (
      <View style={styles.switchControl}>
        <View style={styles.switchLabel}>
          <Text>{this.props.label}</Text>
        </View>
        <View style={styles.switchInput}>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            value={this.state.eventSwitchIsOn} />
        </View>
      </View>
    );
  }
}

class TappableLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.tappableLabel} >
          <Text>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Title'
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
      </View>
    );
  }
}

NewEventScreen.navigationOptions = {
  title: 'New Event',
};

export default NewEventScreen;
