import { takeLatest, put } from 'redux-saga/effects'
import LoginActions, { LoginTypes } from '../Redux/LoginRedux'

/* -- Sagas -- */
export function* loginSaga({ username, password }) {
  if (password === '') {
    yield put(LoginActions.loginFailure('WRONG'))
  } else {
    yield put(LoginActions.loginSuccess(username))
  }
}

export default [takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga)]
