import { take, takeLatest, put, call, fork } from 'redux-saga/effects'
import LoginActions, { LoginTypes } from '../redux/LoginRedux'
import fireApp from '../services/FirebaseApp'

const {
  syncUser,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} = LoginActions

function* loginSaga({ email, password }) {
  try {
    if (email === '') return yield put(loginFailure('MISSING_EMAIL'))
    yield call(fireApp.auth.signInWithEmailAndPassword, email, password)
    yield put(loginSuccess(email))
  } catch (error) {
    yield put(loginFailure(error))
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

function* logoutSaga() {
  try {
    yield call(fireApp.auth.signOut)
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

const LoginSagas = [
  fork(syncUserSaga),
  takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga),
  takeLatest(LoginTypes.LOGOUT, logoutSaga),
]

export default LoginSagas
