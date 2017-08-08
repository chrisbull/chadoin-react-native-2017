import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import LoginActions from '../Redux/LoginRedux'
import RoundedButton from '../Components/RoundedButton'
import { ApplicationStyles } from '../Themes'
const { appStyles } = ApplicationStyles

var styles = StyleSheet.create({
  ...appStyles,
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

class Walkthrough extends Component {
  render() {
    return (
      <Swiper style={styles.mainContainer} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
          <RoundedButton
            onPress={() => {
              this.props.gotoLogin()
            }}
          >
            Continue
          </RoundedButton>
        </View>
      </Swiper>
    )
  }
}

const mapStateToProps = ({ events }) => ({})

const mapDispatchToProps = dispatch => ({
  gotoLogin: event => dispatch(LoginActions.login()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Walkthrough)
