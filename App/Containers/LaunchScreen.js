import React from 'react'
import { Text, Image, View, Modal } from 'react-native'

// Components
import RoundedButton from '../Components/RoundedButton'
import LoginScreen from './LoginScreen'

// Themes
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.middle}>
            <View style={styles.centered}>
              <Image source={Images.launch} style={styles.logo} />
              <View style={styles.section}>
                <Text style={styles.logoName}>ChaDoin</Text>
                <Text style={styles.sectionText}>
                  A real app for just you and your friends.
                </Text>
              </View>
            </View>
            <RoundedButton onPress={this.toggleModal}>
              Login
            </RoundedButton>
            <Modal
              visible={this.state.showModal}
              onRequestClose={this.toggleModal}>
              <LoginScreen screenProps={{ toggle: this.toggleModal }} />
            </Modal>
          </View>
        </View>
      </View>
    )
  }
}
