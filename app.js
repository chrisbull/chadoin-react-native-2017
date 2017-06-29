import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

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

class App extends Component {
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
      </View>
    );
  }
}

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
