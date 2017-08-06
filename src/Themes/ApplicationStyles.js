import { StyleSheet } from 'react-native'
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
  },
  listViewContainer: {
    flex: 1,
  },
  listRow: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
    paddingTop: Metrics.marginVertical,
    paddingBottom: Metrics.marginVertical,
  },
  listRowTitle: {
    fontFamily: 'Geomanist',
    color: TextColor,
    fontWeight: '500',
    fontSize: 17,
  },
  separator: {
    backgroundColor: Colors.smoke20,
    height: 1,
  },
  textInput: {},
  textInputReadonly: {},
  switchInput: {},
  messageRow: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
    paddingTop: Metrics.marginVertical,
    paddingBottom: Metrics.marginVertical,
  },
  messageRowText: {
    fontFamily: 'Geomanist',
    color: TextColor,
    fontSize: 17,
  },
})

export default ApplicationStyles
