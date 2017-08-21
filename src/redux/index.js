/* @flow */
import { combineReducers } from 'redux'
import configureStore from './store'
import rootSaga from '../sagas'

/*
  We combine the reducers, and pass them to the store, along with the sagas.
  We then pass the store to use in the App.js file
*/

const store = () => {
  const rootReducer = combineReducers({
    app: require('./AppRedux').reducer,
    login: require('./LoginRedux').reducer,
    nav: require('./NavigationRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}

export default store
