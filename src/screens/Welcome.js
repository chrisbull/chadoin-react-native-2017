import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#803DFF',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  smileyFace: {}
})

export default class WelcomeScreen extends Component {
  onSignInPress () {
    const { navigate } = this.props.navigation
    navigate('SignIn')
  }

  onSignUpPress () {
    const { navigate } = this.props.navigation
    navigate('SignUp')
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.smileyFace}
          source={require('../images/smiley-face@2x.png')}
        />
        <Text style={styles.text}>
          ChaDoin?
        </Text>
        <TouchableHighlight
          style={{
            backgroundColor: '#0096FB',
            padding: 15,
            borderRadius: 45,
            width: '75%',
            marginTop: 35
          }}
          onPress={() => {
            this.onSignInPress()
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: '#FE0166',
            padding: 15,
            borderRadius: 45,
            width: '75%',
            marginTop: 35
          }}
          onPress={() => {
            this.onSignUpPress()
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
