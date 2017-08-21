import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  ScrollView,
  View,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
} from 'react-native'
import LoginActions from '../redux/LoginRedux'
import { Metrics, ApplicationStyles } from '../theme'

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormInput from '../components/FormInput'
import FormGroup from '../components/FormGroup'
import FormSeparator from '../components/FormSeparator'
import RoundedButton from '../components/RoundedButton'
import TextLink from '../components/TextLink'

const appStyles = ApplicationStyles

const getStyles = (props, state) => {
  console.log(
    'LoginScreen -> getStyles() -> visibleHeight',
    state.visibleHeight,
  )
  const styles = StyleSheet.create({
    mainContainer: {
      ...appStyles.mainContainer,
      height: state.visibleHeight,
    },

    contentContainer: {
      ...appStyles.contentContainer,
      ...appStyles.centerVerticalContainer,
    },

    centerTextContainer: {
      ...appStyles.centerTextContainer,
      marginTop: Metrics.spacing.xlarge,
    },

    topLogo: {
      maxHeight: 140,
      maxWidth: 140,
      alignSelf: 'center',
    },
  })

  return styles
}

class LoginScreen extends React.Component {
  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor(props) {
    super(props)
    this.isAttempting = false
  }

  state = {
    email: '',
    password: '',
    visibleHeight: Metrics.screenHeight,
    topLogo: { width: Metrics.screenWidth },
    focusPasswordInput: false,
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      this.props.navigation.goBack()
    }
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
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: { width: 100, height: 70 },
    })
  }

  keyboardDidHide = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
    })
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(email, password)
  }

  handleChangeUsername = text => {
    this.setState({ email: text })
  }

  handleChangePassword = text => {
    this.setState({ password: text })
  }

  render() {
    const { email, password } = this.state
    const { fetching } = this.props
    const editable = !fetching

    const styles = getStyles(this.props, this.state)

    return (
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={appStyles.scrollViewContentContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={appStyles.h1}>
            {`Login`}
          </Text>
          <FormGroup>
            <FormInput
              value={email}
              editable={editable}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid="transparent"
              onSubmitEditing={() =>
                this.setState({ focusPasswordInput: true })}
              placeholder="Email"
            />
            <FormSeparator />
            <FormInput
              value={password}
              editable={editable}
              keyboardType="default"
              returnKeyType="go"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid="transparent"
              onSubmitEditing={this.handlePressLogin}
              placeholder="Password"
              focus={this.state.focusPasswordInput}
            />
          </FormGroup>

          <View style={appStyles.buttonGroupHorizontal}>
            <RoundedButton
              primary
              label="Sign In"
              onPress={this.handlePressLogin}
            />
          </View>
          <View style={styles.centerTextContainer}>
            <Text style={appStyles.bodyLight}>Forgot your password? </Text>
            <TextLink title="Reset Password" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  fetching: state.login.fetching,
})

const mapDispatchToProps = dispatch => ({
  attemptLogin: (email, password) =>
    dispatch(LoginActions.loginRequest(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
