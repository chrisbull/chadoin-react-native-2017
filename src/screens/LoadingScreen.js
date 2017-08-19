import { View } from 'react-native'
import React from 'react'

import { ApplicationStyles } from '../themes'

const styles = ApplicationStyles

class LoadingScreen extends React.Component {
  render() {
    return <View style={styles.mainContainer} />
  }
}

export default LoadingScreen
