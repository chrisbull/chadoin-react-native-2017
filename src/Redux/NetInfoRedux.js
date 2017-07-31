import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeConnectionStatus: ['status'],
  fetchConnectionStatusError: ['error'],
})

export const NetInfoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isConnected: false,
  error: null,
})

/* ------------- Reducers ------------- */

export const setStatus = (state, { status }) =>
  state.merge({ isConnected: status })

export const setError = (state, { error }) =>
  state.merge({ isConnected: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_CONNECTION_STATUS]: setStatus,
})
