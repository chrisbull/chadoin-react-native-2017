import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
} from 'react-native'
import LoginActions from '../Redux/LoginRedux'
import { Images, Metrics, ApplicationStyles } from '../Themes'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.styles,
    paddingTop: 70,
  },
})

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
    const textInputStyle = editable
      ? styles.textInput
      : styles.textInputReadonly
    return (
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center' }}
        style={[styles.mainContainer, { height: this.state.visibleHeight }]}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={Images.logo}
          style={[styles.topLogo, this.state.topLogo]}
        />
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Username</Text>
            <TextInput
              style={textInputStyle}
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
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Password</Text>
            <TextInput
              style={textInputStyle}
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
          </View>

          <View style={[styles.loginRow]}>
            <TouchableOpacity
              style={styles.loginButtonWrapper}
              onPress={this.handlePressLogin}
            >
              <View style={styles.loginButton}>
                <Text style={styles.loginText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButtonWrapper}
              onPress={() => this.props.navigation.goBack()}
            >
              <View style={styles.loginButton}>
                <Text style={styles.loginText}>Cancel</Text>
              </View>
            </TouchableOpacity>
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
