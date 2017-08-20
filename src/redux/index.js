import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  appState: require('./AppStateRedux').reducer,
  chats: require('./ChatRedux').reducer,
  events: require('./EventRedux').reducer,
  login: require('./LoginRedux').reducer,
  netInfo: require('./NetInfoRedux').reducer,
  search: require('./SearchRedux').reducer,
  // nav: require('./NavigationRedux').reducer,
})

export default rootReducer
