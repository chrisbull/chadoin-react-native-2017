/* @flow */
import { takeLatest, put, select } from 'redux-saga/effects'
import StatupActions, { StartupTypes } from '../redux/StartupRedux'
import AuthActions, { isLoggedIn } from '../redux/AuthRedux'

/* -- Selectors -- */
export const selectLoggedInStatus = state => isLoggedIn(state.auth)

/* -- Sagas -- */
export function* startupSaga() {
  yield put(StatupActions.setRehydrationComplete())

  const isLoggedIn = yield select(selectLoggedInStatus)

  if (isLoggedIn) {
    yield put(AuthActions.autoLogin())
  }
}

export default [takeLatest(StartupTypes.STARTUP_SAGA, startupSaga)]
