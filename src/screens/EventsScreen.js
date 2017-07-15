import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  card: {
    backgroundColor: '#EFEFEF',
    height: 100,
    marginTop: 16,
    width: '100%',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 50,
    textAlign: 'center',
    width: '100%',
  },
  startDate: {
    textAlign: 'center',
    width: '100%',
  },
});

export class EventsScreen extends Component {
  propTypes = {
    newEvent: PropTypes.func,
  };

  state = {
    events: this.props.events || [],
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Events',
      headerRight: <Button title="New" onPress={() => params.newEvent()} />,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      newEvent: this.props.newEvent,
      editEvent: this.props.editEvent,
    });
  }

  outputEvent() {
    var eventList = this.props.events.map(event => {
      return (
        <TouchableHighlight
          onPress={() => this.editEvent(event)}
          style={styles.card}
        >
          <View>
            <Text style={styles.title}>
              {event.title}
            </Text>
            <Text style={styles.startDate}>
              {'' + event.startDateTime}
            </Text>
          </View>
        </TouchableHighlight>
      );
    });

    return (
      <View>
        {eventList}
      </View>
    );
  }

  editEvent = event => {
    console.log('EventsScreen -> editEvent(event)', event);
    this.props.editEvent(event);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.outputEvent()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  editEvent: event => dispatch({ type: 'EDIT_EVENT', ...event }),
  newEvent: events => dispatch({ type: 'NEW_EVENT', ...events }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
