import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    paddingTop: Metrics.navBarHeight
  },
  headerText: {
    ...ApplicationStyles.headerText
  }
})
