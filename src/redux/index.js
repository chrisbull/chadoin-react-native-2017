import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    appState: require('./AppStateRedux').reducer,
    chats: require('./ChatRedux').reducer,
    events: require('./EventRedux').reducer,
    login: require('./LoginRedux').reducer,
    nav: require('./NavigationRedux').reducer,
    netInfo: require('./NetInfoRedux').reducer,
    search: require('./SearchRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
