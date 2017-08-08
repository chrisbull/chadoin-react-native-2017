import { StyleSheet, PixelRatio, Platform } from 'react-native'
import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'

export const UnderlayColor = 'rgba(0,0,0,0.1)'
export const TintColor = Colors.purple
export const TextColor = Colors.smoke80

export const appStyles = {
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
    padding: 15,
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
  row: {
    marginBottom: 5,
    marginTop: 5,
  },
  textInput: {
    ...Fonts.style.normal,
    padding: 15,
    backgroundColor: 'white',
    borderColor: Colors.smoke50,
    borderWidth: 0.5 / PixelRatio.get(),
    borderRadius: 4,
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
  messageInputContainer: {
    backgroundColor: 'white',
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
    paddingTop: 4,
    paddingBottom: 4,
  },
  messageTextInputContainer: {},
  messageTextInput: {
    ...Fonts.style.normal,
  },
  sendButton: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
  },
}

const ApplicationStyles = appStyles // StyleSheet.create(appStyles)

export default ApplicationStyles
