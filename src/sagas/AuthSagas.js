/* @flow */
import { take, takeLatest, put, call, fork } from 'redux-saga/effects'
import AuthActions, { AuthTypes } from '../redux/AuthRedux'
import fireApp from '../services/FirebaseApp'

const {
  syncUser,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} = AuthActions

function* loginSaga({ email, password }) {
  try {
    if (email === '') return yield put(loginFailure('MISSING_EMAIL'))
    yield call(fireApp.auth.signInWithEmailAndPassword, email, password)
    yield put(loginSuccess(email))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function* logoutSaga() {
  try {
    yield call(fireApp.auth.signOut)
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

function* syncUserSaga() {
  const channel = yield call(fireApp.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) yield put(syncUser(user))
    else yield put(syncUser(null))
  }
}

const AuthSagas = [
  fork(syncUserSaga),
  takeLatest(AuthTypes.LOGIN_REQUEST, loginSaga),
  takeLatest(AuthTypes.LOGOUT_REQUEST, logoutSaga),
]

export default AuthSagas
