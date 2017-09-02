/* @flow */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* --- Types and Action Creators --- */

const { Types, Creators } = createActions({
  login: null, // nav to login
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  loginFailure: ['error'],

  logout: null, // nav to login
  logoutRequest: null,
  logoutSuccess: null,
  logoutFailure: ['error'],

  syncUser: ['user'],

  autoLogin: null, // nav to home
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
export const login = state => state
export const loginRequest = state => state.merge({ fetching: true })
export const loginSuccess = (state, { user }) =>
  state.merge({ fetching: false, error: null, user })
export const loginFailure = (state, { error }) =>
  state.merge({ fetching: false, error })

// Logout
export const logout = state => INITIAL_STATE
export const logoutRequest = state => INITIAL_STATE
export const logoutSuccess = state => INITIAL_STATE
export const logoutFailure = (state, { error }) =>
  state.merge({ ...INITIAL_STATE, error })

// Sync User
export const syncUser = (state, { email }) => state.merge({ email })

// Auto Login
export const autoLogin = state => state

/* --- Hookup Reducers To Types --- */
export const reducer = createReducer(INITIAL_STATE, {
  // Login
  [Types.LOGIN]: login,
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  // Logout
  [Types.LOGOUT]: logout,
  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAILURE]: logoutFailure,

  // Sync User
  [Types.SYNC_USER]: syncUser,

  // Auto Login
  [Types.AUTO_LOGIN]: autoLogin,
})

/* --- Selectors --- */
export const isLoggedIn = authState => authState.email !== null
