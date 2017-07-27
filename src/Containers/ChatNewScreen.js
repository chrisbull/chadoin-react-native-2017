import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, ScrollView, Button, StyleSheet } from 'react-native'
import { ApplicationStyles } from '../Themes/'
import RoundedButton from '../Components/RoundedButton'
import ChatActions from '../Redux/ChatRedux'

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.MainContainer.styles,
  },
})

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
      <ScrollView style={styles.mainContainer}>
        <View>
          <TextInput
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
