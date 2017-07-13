import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  logoName: {
    ...Fonts.style.h2,
    color: Colors.text,
    textAlign: 'center'
  },
  centered: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
    height: '100%',
  }
})
