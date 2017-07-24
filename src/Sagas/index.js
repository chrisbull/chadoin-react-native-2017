import { all } from 'redux-saga/effects'

import startupSagas from './StartupSagas'
import eventSagas from './EventSagas'
import loginSagas from './LoginSagas'

export default function* root() {
  yield all([...startupSagas, ...loginSagas, ...eventSagas])
}
