import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.marginVertical,
    paddingBottom: 50,
  },
  contentContainer: {
    paddingTop: 50,
    marginBottom: 50,
  },
  headerText: {
    color: Colors.headerTitle,
    textAlign: 'center',
    marginVertical: Metrics.marginVertical,
    ...Fonts.style.h4,
  },
  inputContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  switchControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  switchLabel: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8,
    width: '50%',
  },
  switchInput: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
  },
  dateTimeView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTimeLabel: {
    lineHeight: 40,
    width: '33.3333%',
  },
  dateTimeDate: {
    lineHeight: 40,
    textAlign: 'right',
    width: '33.3333%',
  },
  dateTimeTime: {
    lineHeight: 40,
    textAlign: 'right',
    width: '33.3333%',
  },
  tappableLabel: {
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 8,
  },
  textInput: {
    height: 40,
    paddingHorizontal: 8,
  },
});
