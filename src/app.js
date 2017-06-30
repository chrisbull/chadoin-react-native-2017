// import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import { connect } from 'react-redux';
// import { StackNavigator, addNavigationHelpers } from 'react-navigation';
//
//
// import { fetchData } from './actions';
//
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'AIzaSyDWfz8Ui-p-G2mJX_t92Zu2nFVtp06bGf8',
//   authDomain: 'chadoin-932bf.firebaseapp.com',
//   databaseURL: 'https://chadoin-932bf.firebaseio.com',
//   projectId: 'chadoin-932bf',
//   storageBucket: 'chadoin-932bf.appspot.com',
//   messagingSenderId: '701206774326',
// };
//
// const firebaseApp = firebase.initializeApp(firebaseConfig);
//
// import SignIn from './shared/screens/SignIn';
// import SignUp from './shared/screens/SignUp';
// import Welcome from './shared/screens/Welcome';
//
// const App = StackNavigator({
//   Welcome: { screen: Welcome },
//   SignUp: { screen: SignUp },
//   SignIn: { screen: SignIn },
// });
//
// function mapStateToProps(state) {
//   return {
//     appData: state.appData,
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchData: () => dispatch(fetchData()),
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

class App extends Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
