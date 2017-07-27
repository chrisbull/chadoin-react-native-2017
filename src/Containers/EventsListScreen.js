import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import EventActions from '../Redux/EventRedux'
import { ApplicationStyles } from '../Themes/'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.styles,
  },
})

class EventsListScreen extends Component {
  static defaultProps = {
    events: [],
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Events',
      headerRight: (
        <Button
          title="New"
          onPress={() => {
            navigation.dispatch(EventActions.gotoEvent())
          }}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        {this.props.events.map(event =>
          <TouchableHighlight
            onPress={() => {
              this.props.gotoEvent(event)
            }}
            style={styles.card}
            key={event.id}
          >
            <View>
              <Text style={styles.title}>
                {event.title || ''}
              </Text>
              <Text style={styles.startDate}>
                {event.startDateTime || ''}
              </Text>
            </View>
          </TouchableHighlight>,
        )}
        <RoundedButton
          onPress={() => {
            this.props.gotoEvent()
          }}
        >
          Add New Event
        </RoundedButton>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ events }) => ({
  events: events.list,
})

const mapDispatchToProps = dispatch => ({
  gotoEvent: event => dispatch(EventActions.gotoEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsListScreen)
