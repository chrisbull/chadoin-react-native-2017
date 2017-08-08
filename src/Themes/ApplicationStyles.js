import { StyleSheet, PixelRatio, Platform } from 'react-native'
import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'

export const UnderlayColor = 'rgba(0,0,0,0.1)'
export const TintColor = Colors.purple
export const TextColor = Colors.smoke80

const ApplicationStyles = StyleSheet.create({
  navigationHeader: {
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    position: 'relative',
  },
  scrollContainer: {
    justifyContent: 'center',
    padding: 15,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.purple,
  },
  blurContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
  },
  listContainer: {
    flex: 1,
  },
  listRow: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
    paddingTop: Metrics.marginVertical,
    paddingBottom: Metrics.marginVertical,
  },
  listRowTitle: {
    ...Fonts.style.normal,
  },
  separator: {
    backgroundColor: Colors.smoke20,
    height: 1,
  },
  inputContainer: {},
  textInput: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 0.5 / PixelRatio.get(),
    borderRadius: 18,
  },
  textInputReadonly: {},
  switchInput: {},
  messageRow: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
    paddingTop: Metrics.marginVertical,
    paddingBottom: Metrics.marginVertical,
  },
  messageRowText: {
    ...Fonts.style.normal,
  },
  messageTextInput: {
    ...Fonts.style.normal,
  },
  sendButton: {
    paddingRight: 15,
    paddingLeft: 15,
  },
})

export default ApplicationStyles
