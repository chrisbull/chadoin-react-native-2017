import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, ScrollView } from 'react-native'

import RoundedButton from '../Components/RoundedButton'

import ChatActions from '../Redux/ChatRedux'

import styles from './Styles/EventScreenStyle'

export class ChatCreateScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Create Chat',
    }
  }

  state = {
    title: '',
  }

  updateChatTitle = title => {
    this.setState({ title })
  }

  handleCreate = () => {
    const { title } = this.state
    this.props.createChat({ title })
  }

  render() {
    const { title } = this.state

    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={this.updateChatTitle}
            value={title}
          />

          <RoundedButton onPress={this.handleCreate}>Create Chat</RoundedButton>
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
