import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, ScrollView, Button } from 'react-native'

import RoundedButton from '../Components/RoundedButton'

import ChatActions from '../Redux/ChatRedux'

import styles from './Styles/EventScreenStyle'

class ChatCreateScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create Chat',
    headerLeft: (
      <Button onPress={() => navigation.goBack(null)} title="Cancel" />
    ),
  })

  state = {
    title: '',
  }

  handleCreateChat = () => {
    this.props.createChat({ title: this.state.title })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={title => {
              this.setState({ title })
            }}
            value={this.state.title}
          />
          <RoundedButton
            onPress={() => {
              this.handleCreateChat()
            }}
            text="Create Chat"
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  createChat: chat => dispatch(ChatActions.createChatRequest(chat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatCreateScreen)
