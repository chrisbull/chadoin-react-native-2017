import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import { StackNavigator } from 'react-navigation';

import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { fetchData } from './actions';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDWfz8Ui-p-G2mJX_t92Zu2nFVtp06bGf8',
  authDomain: 'chadoin-932bf.firebaseapp.com',
  databaseURL: 'https://chadoin-932bf.firebaseio.com',
  projectId: 'chadoin-932bf',
  storageBucket: 'chadoin-932bf.appspot.com',
  messagingSenderId: '701206774326',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#803DFF',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  smileyFace: {},
});

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  onSignInPress() {
    const { navigate } = this.props.navigation;
    navigate('SignIn');
  }

  onSignUpPress() {
    const { navigate } = this.props.navigation;
    navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.smileyFace}
          source={require('./images/smiley-face@2x.png')}
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
            marginTop: 35,
          }}
          onPress={() => {
            this.onSignInPress();
          }}
        >
          <Text style={{ color: '#ffffff', textAlign: 'center' }}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: '#FE0166',
            padding: 15,
            borderRadius: 45,
            width: '75%',
            marginTop: 35,
          }}
          onPress={() => {
            this.onSignUpPress();
          }}
        >
          <Text style={{ color: '#ffffff', textAlign: 'center' }}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class SignUpScreen extends Component {
  render() {
    return (
      <View>
        <Text>Sign Up</Text>
      </View>
    );
  }
}

class SignInScreen extends Component {
  render() {
    return (
      <View>
        <Text>Sign Up</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  SignUp: { screen: SignUpScreen },
  SignIn: { screen: SignInScreen },
});

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
