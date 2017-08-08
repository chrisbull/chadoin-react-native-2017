import { takeLatest, put, select } from 'redux-saga/effects'
import AppStateActions from '../Redux/AppStateRedux'
import { StartupTypes } from '../Redux/StartupRedux'
import LoggedInActions, {
  isLoggedIn,
  isFirstTimeOpeningApp,
} from '../Redux/LoginRedux'

/* -- Selectors -- */
// exported to make available for tests
export const selectLoggedInStatus = state => isLoggedIn(state.login)
export const selectFirstTimeOpeningApp = state =>
  isFirstTimeOpeningApp(state.login)

/* -- Sagas -- */

export function* startupSaga() {
  yield put(AppStateActions.setRehydrationComplete())

  const isLoggedIn = yield select(selectLoggedInStatus)
  const firstTimeOpeningApp = yield select(selectFirstTimeOpeningApp)

  if (isLoggedIn) {
    yield put(LoggedInActions.autoLogin())
  } else {
    if (firstTimeOpeningApp) {
      yield put(LoggedInActions.walkthrough())
    }
  }
}

export default [takeLatest(StartupTypes.STARTUP, startupSaga)]
