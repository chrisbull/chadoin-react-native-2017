import React from 'react'
import { Button, View, Text, Image, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Images, Colors } from '../Themes'

class LoginScreen extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Login',
    headerLeft: (<Button title='Back' onPress={screenProps.toggle} />)
  })

  render () {
    return (
      <View>
        <Text>Welcome to the Login Screen</Text>
      </View>
    )
  }
}

export default StackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: Colors.blue
  },
  // Keeping this here for future when we can make
  navigationOptions: {
    // headerLeft: (<Button title='Back' onPress={ this.props.screenProps.toggle } />)
  }

  // navigationOptions: {
  //   header: {
  //     left: (
  //       <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
  //     ),
  //     style: {
  //       backgroundColor: '#3e243f'
  //     }
  //   }
  // }
})
