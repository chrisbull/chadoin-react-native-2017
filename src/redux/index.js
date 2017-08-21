/* @flow */
import { combineReducers } from 'redux'
import configureStore from './store'
import rootSaga from '../sagas'

import * as StartupRedux from './StartupRedux'
import * as AuthRedux from './AuthRedux'
import * as NavigationRedux from './NavigationRedux'

/*
  We combine the reducers, and pass them to the store, along with the sagas.
  We then pass the store to use in the App.js file
*/

export default () => {
  const rootReducer = combineReducers({
    app: StartupRedux.reducer,
    auth: AuthRedux.reducer,
    nav: NavigationRedux.reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
