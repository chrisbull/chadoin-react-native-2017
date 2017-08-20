/* @flow */
import { StyleSheet, Animated } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { ApplicationStyles, Colors, Fonts } from '../themes'
import ChatsListScreen from './ChatsListScreen'
import EventsListScreen from './EventsListScreen'

// import EventActions from '../redux/EventRedux'
// import LoginActions from '../redux/LoginRedux'

const appStyles = ApplicationStyles

class HomeScreen extends Component {
  state = {
    index: 0,
    routes: [{ key: '1', title: 'Events' }, { key: '2', title: 'Chats' }],
  }

  _handleIndexChange = index => this.setState({ index })

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i)
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? Colors.primary : Colors.baseColor),
    )
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    })

    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    )
  }

  _renderHeader = props =>
    <TabBar
      {...props}
      renderLabel={this._renderLabel(props)}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tab}
      style={styles.tabbar}
    />

  _renderScene = SceneMap({
    '1': EventsListScreen,
    '2': ChatsListScreen,
  })

  render() {
    return (
      <TabViewAnimated
        style={styles.mainContainer}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    )
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Home Screen</Text>
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({
  container: {
    ...appStyles.mainContainer,
    flex: 1,
  },
  indicator: {
    backgroundColor: Colors.purple,
  },
  tab: {},
  tabbar: {
    backgroundColor: Colors.transparent,
  },
  label: {
    ...Fonts.weight.medium,
  },
})

// HomeScreen.navigationOptions = ({ navigation }) => ({
//   title: 'ChaDoin?',
//   headerLeft: (
//     <Button
//       title="Logout"
//       onPress={() => {
//         navigation.dispatch(LoginActions.logout())
//       }}
//       color={TintColor}
//     />
//   ),
//   headerRight: (
//     <Button
//       title="New"
//       onPress={() => {
//         navigation.dispatch(EventActions.gotoNewEvent())
//       }}
//       color={TintColor}
//     />
//   ),
// })

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
