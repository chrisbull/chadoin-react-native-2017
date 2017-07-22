import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  headerText: {
    color: Colors.snow,
    textAlign: 'center',
    marginVertical: Metrics.marginVertical,
    ...Fonts.style.h4
  },
  card: {
    backgroundColor: '#efefef',
    height: 100,
    marginTop: 16,
    width: '100%'
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 50,
    textAlign: 'center',
    width: '100%'
  },
  startDate: {
    textAlign: 'center',
    width: '100%'
  }
})
