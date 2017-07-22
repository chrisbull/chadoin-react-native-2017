import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'
import firebaseConfig from '../Config/FirebaseConfig'

const myFirebaseApp = firebase.initializeApp(firebaseConfig)

export const firebaseRef = myFirebaseApp.database().ref()
export default new ReduxSagaFirebase(myFirebaseApp)
