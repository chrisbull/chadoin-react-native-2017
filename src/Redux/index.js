import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    netInfo: require('./NetInfoRedux').reducer,
    nav: require('./NavigationRedux').reducer,
    appState: require('./AppStateRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    events: require('./EventRedux').reducer,
    chats: require('./ChatRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
