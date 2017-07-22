import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import styles from './Styles/EventsScreenStyle';

export class EventsScreen extends Component {
  // state = {
  //   events: this.props.events || [],
  // };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Events',
      headerRight: (
        <Button
          title="New"
          onPress={() => navigation.navigate('EventScreen')}
        />
      ),
    };
  };

  // componentDidMount() {
  //   this.props.navigation.setParams({
  //     newEvent: this.props.newEvent,
  //     editEvent: this.props.editEvent,
  //   });
  // }

  outputEvent() {
    // var eventList = this.props.events.map(event => {
      return (
        <TouchableHighlight
          // onPress={() => this.editEvent(event)}
          style={styles.card}
        >
          <View>
            <Text style={styles.title}>
              {/* {event.title} */}
            </Text>
            <Text style={styles.startDate}>
              {/* {'' + event.startDateTime} */}
            </Text>
          </View>
        </TouchableHighlight>
      );
    // });

    return (
      <View>
        {eventList}
      </View>
    );
  }

  // editEvent = event => {
  //   console.log('EventsScreen -> editEvent(event)', event);
  //   this.props.editEvent(event);
  // };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        {this.outputEvent()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  // events: state.events,
});

const mapDispatchToProps = dispatch => ({
  // editEvent: event => dispatch({ type: 'EVENT_EDIT', ...event }),
  // newEvent: events => dispatch({ type: 'EVENT_NEW', ...events }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
