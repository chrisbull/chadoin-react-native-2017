import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  // ScrollView,
  View,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Metrics, AppStyles } from '../theme'
import Button from '../components/Button'
import AuthActions from '../redux/AuthRedux'

class LoginScreen extends React.Component {
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  state = {
    visibleHeight: Metrics.screenHeight,
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate()
  }

  componentWillMount() {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = e => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
    })
  }

  keyboardDidHide = e => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
    })
  }

  handlePress() {}

  render() {
    const styles = getStyles(this.props, this.state)

    return (
      <KeyboardAwareScrollView
        style={styles.mainContainer}
        contentContainerStyle={AppStyles.scrollViewContentContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={AppStyles.h1}>Hello!</Text>

          <View style={AppStyles.buttonGroupHorizontal}>
            <Button primary label="Logout" onPress={this.props.logout} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const getStyles = (props, state) => {
  console.log(
    'LoginScreen -> getStyles() -> visibleHeight',
    state.visibleHeight,
  )

  const styles = StyleSheet.create({
    mainContainer: {
      ...AppStyles.mainContainer,
      height: state.visibleHeight,
    },
    contentContainer: {
      ...AppStyles.contentContainer,
      ...AppStyles.centerVerticalContainer,
    },
  })

  return styles
}

const mapStateToProps = ({ auth }) => ({
  fetching: auth.fetching,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
