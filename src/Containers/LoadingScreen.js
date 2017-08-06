import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ApplicationStyles } from '../Themes'

const styles = ApplicationStyles

class LoadingScreen extends React.Component {
  render() {
    return <View style={styles.mainContainer} />
  }
}

export default LoadingScreen
