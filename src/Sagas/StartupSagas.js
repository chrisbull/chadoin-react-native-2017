import { takeLatest, put, select } from 'redux-saga/effects'
import AppStateActions from '../Redux/AppStateRedux'
import { StartupTypes } from '../Redux/StartupRedux'
import LoggedInActions, { isLoggedIn } from '../Redux/LoginRedux'

/* -- Selectors -- */
// exported to make available for tests
export const selectLoggedInStatus = state => isLoggedIn(state.login)

/* -- Sagas -- */

export function* startupSaga() {
  yield put(AppStateActions.setRehydrationComplete())

  const isLoggedIn = yield select(selectLoggedInStatus)

  if (isLoggedIn) {
    yield put(LoggedInActions.autoLogin())
  }
}

export default [takeLatest(StartupTypes.STARTUP, startupSaga)]
