/* @flow */
import { all } from 'redux-saga/effects'

import startupSagas from './StartupSagas'
import authSagas from './AuthSagas'

export default function* root() {
  yield all([
    ...startupSagas, // StartupSagas
    ...authSagas, // AuthSagas
  ])
}
