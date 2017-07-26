import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  loginFailure: ['error'],
  logout: null,
  logoutSuccess: null,
  logoutFailure: ['error'],
  autoLogin: null,
  syncUserData: null,
  syncUser: ['user'],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  error: null,
  fetching: false,
  user: null,
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = state => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { user }) =>
  state.merge({ fetching: false, error: null, user })

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

// we've logged out
export const logout = state => INITIAL_STATE
export const logoutFailure = (state, { error }) =>
  state.merge({ ...INITIAL_STATE, error })

// startup saga invoked autoLogin
export const autoLogin = state => state

export const syncUser = (state, { email }) => state.merge({ email })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTO_LOGIN]: autoLogin,
  [Types.SYNC_USER]: syncUser,
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,

  [Types.LOGOUT]: logout,
  [Types.LOGOUT_SUCCESS]: logout,
  [Types.LOGOUT_FAILURE]: logoutFailure,
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = loginState => loginState.email !== null
