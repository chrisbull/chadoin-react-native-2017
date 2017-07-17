import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import styles from './Styles/AuthenticatedScreenStyle'
import LoginActions from '../Redux/LoginRedux'

class AuthenticatedScreen extends Component {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You are logged in</Text>
        <RoundedButton
          text='Go to Another Authenticated Screen'
          onPress={() => navigation.navigate('AnotherAuthenticatedScreen')}
        />
        <RoundedButton text='Logout' onPress={this.props.logout} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(LoginActions.logout())
})

export default connect(null, mapDispatchToProps)(AuthenticatedScreen)
