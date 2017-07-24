import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import LoginActions from '../Redux/LoginRedux'

import styles from './Styles/AuthenticatedScreenStyle'

class AuthenticatedScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You are logged in</Text>
        <RoundedButton
          onPress={() => navigation.navigate('AnotherAuthenticatedScreen')}
          text="Go to Another Authenticated Screen"
        />
        <RoundedButton
          onPress={() => navigation.navigate('EventStack')}
          text="Events"
        />
        <RoundedButton onPress={this.props.logout} text="Logout" />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LoginActions.logout()),
})

export default connect(null, mapDispatchToProps)(AuthenticatedScreen)
