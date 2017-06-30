import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Image, Text, h2 } from 'react-native';

import { Colors } from '../utils';

import LoginStatusMessage from '../views/LoginStatusMessage';
import AuthButton from '../components/AuthButton';
import { Button } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple,
  },
  logoText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loggedInText: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 15,
  },
});

class MainScreen extends Component {
  render() {
    const { isLoggedIn, login, logout } = this.props;

    return (
      <View style={styles.container}>
        <Image source={require('../images/smiley-face@2x.png')} />
        <Text style={styles.logoText}>ChaDoin?</Text>
        {isLoggedIn
          ? <View>
              <Text style={styles.loggedInText}>You are logged in</Text>
              <Button
                style={{ marginBottom: 15 }}
                title="Sign Out"
                onPress={logout}
              />
            </View>
          : <View>
              <Button title="Sign In" onPress={login} />
            </View>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  login: () => dispatch({ type: 'Login' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
