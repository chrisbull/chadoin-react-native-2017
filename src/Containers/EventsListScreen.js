import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  View,
  ListView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import EventActions from '../Redux/EventRedux'
import { Colors, ApplicationStyles } from '../Themes/'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.styles,
  },
  listRowContainer: {
    padding: 12,
  },
  listRowTitle: {
    color: Colors.blueGreyMedium,
    fontWeight: '500',
  },
})

const tableRowUnderlayColor = 'rgba(0,0,0,0.3)'

const ListRow = props =>
  <TouchableHighlight
    onPress={() => {
      props.gotoEvent(props.data)
    }}
    style={styles.listRowContainer}
    underlayColor={tableRowUnderlayColor}
    key={props.data.id}
  >
    <Text>
      {props.data.title}
    </Text>
  </TouchableHighlight>

class EventsListScreen extends Component {
  static defaultProps = {
    events: [],
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: ds.cloneWithRows(this.props.events),
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={data =>
            <ListRow data={data} gotoEvent={this.props.gotoEvent} />}
        />
      </View>
    )
  }
}

EventsListScreen.navigationOptions = ({ navigation }) => ({
  title: 'Events',
  headerRight: (
    <Button
      title="New"
      onPress={() => {
        navigation.dispatch(EventActions.gotoNewEvent())
      }}
    />
  ),
})

const mapStateToProps = ({ events }) => ({
  events: events.list,
})

const mapDispatchToProps = dispatch => ({
  gotoEvent: event => dispatch(EventActions.gotoEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsListScreen)
