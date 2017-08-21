import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, ScrollView, Button } from 'react-native'
import { ApplicationStyles } from '../themes'
import RoundedButton from '../components/RoundedButton'
import ChatActions from '../redux/ChatRedux'

const styles = ApplicationStyles

class ChatCreateScreen extends Component {
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

ChatCreateScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create Chat',
  headerLeft: <Button onPress={() => navigation.goBack(null)} title="Cancel" />,
})

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  createChat: chat => dispatch(ChatActions.createChatRequest(chat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatCreateScreen)
