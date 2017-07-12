import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Switch,
  TouchableHighlight,
  DatePickerIOS
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20
  }
})

export class EventsScreen extends Component {
  propTypes = {
    newEvent: PropTypes.func
  };

  state = {
    events: {}
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: 'Events',
      headerRight: <Button title='New' onPress={() => params.newEvent()} />
    }
  };

  componentDidMount () {
    this.props.navigation.setParams({ newEvent: this.props.newEvent })
  }

  render () {
    return <ScrollView style={styles.container} />
  }
}

const mapStateToProps = state => ({
  // events: state.events,
})

const mapDispatchToProps = dispatch => ({
  newEvent: events => dispatch({ type: 'NEW_EVENT', ...events })
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
