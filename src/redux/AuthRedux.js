/* @flow */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* --- Types and Action Creators --- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  loginFailure: ['error'],

  logoutRequest: null,
  logoutSuccess: null,
  logoutFailure: ['error'],

  syncUser: ['user'],

  autoLogin: null, // Navigate to HomeScreen
})

export const AuthTypes = Types
export default Creators

/* --- Initial State --- */
export const INITIAL_STATE = Immutable({
  email: null,
  error: null,
  fetching: false,
  user: null,
})

/* --- Reducers --- */

// Login
export const loginRequest = state => state.merge({ fetching: true })
export const loginSuccess = (state, { user }) =>
  state.merge({ fetching: false, error: null, user })
export const loginFailure = (state, { error }) =>
  state.merge({ fetching: false, error })

// Logout
export const logoutRequest = state => INITIAL_STATE
export const logoutSuccess = state => INITIAL_STATE
export const logoutFailure = (state, { error }) =>
  state.merge({ ...INITIAL_STATE, error })

// Sync User
export const syncUser = (state, { email }) => state.merge({ email })

/* --- Hookup Reducers To Types --- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAILURE]: logoutFailure,
  [Types.SYNC_USER]: syncUser,
})

/* --- Selectors --- */
export const isLoggedIn = authState => authState.email !== null
