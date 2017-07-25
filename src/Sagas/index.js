import { all } from 'redux-saga/effects'

import startupSagas from './StartupSagas'
import eventSagas from './EventSagas'
import loginSagas from './LoginSagas'
import chatSagas from './ChatSagas'

export default function* root() {
  yield all([...startupSagas, ...loginSagas, ...eventSagas, ...chatSagas])
}
