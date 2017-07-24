import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Buttons } from '../../Themes'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    paddingTop: 70,
  },
  form: {
    backgroundColor: Colors.white,
    margin: Metrics.baseMargin,
    borderRadius: 4,
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  rowLabel: {
    color: Colors.black,
  },
  textInput: {
    height: 40,
    color: Colors.black,
  },
  textInputReadonly: {
    height: 40,
    color: Colors.black,
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
  },
  loginButtonWrapper: {
    flex: 1,
  },
  loginButton: {
    ...Buttons.style.default,
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver,
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: 'Geomanist-Bold',
    fontSize: 50,
    color: 'white',
    letterSpacing: -2,
  },
})
