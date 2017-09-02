/* @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import ReduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import Config from '../config/DebugConfig'
import ReduxPersist from '../config/ReduxPersist'
import RehydrationServices from '../services/RehydrationServices'

/*
  ConfigureStore connects the reducers and the sagas to redux,
  and rehydrates the state based on the local storage
*/

const ConfigureStore = (rootReducer, rootSaga) => {
  /* --- Redux Configuration --- */
  const middleware = []
  const enhancers = []

  /* --- Redux Logger --- */
  middleware.push(ReduxLogger)

  /* --- Saga Middleware --- */
  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* --- Assemble Middleware --- */
  enhancers.push(applyMiddleware(...middleware))

  /* --- AutoRehydrate Enhancer --- */
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  /*
    if Reactotron is enabled (default for __DEV__),
    we'll create the store through Reactotron
  */
  const createAppropriateStore = Config.useReactotron
    ? console.tron.createStore
    : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  /* --- Fix for hot reloading and react-redux v2.0.0 --- */
  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextRootReducer = require('./index')
      store.replaceReducer(nextRootReducer)
    })
  }

  /* --- configure persistStore and check reducer version number --- */
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  /* --- kick off root saga --- */
  sagaMiddleware.run(rootSaga)

  return store
}

export default ConfigureStore
