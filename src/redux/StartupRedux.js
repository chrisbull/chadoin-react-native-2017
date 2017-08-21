/* @flow */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/*
  StartupRedux creates the action STARTUP
  which is then listed to by the Sagas
  and and runs the Startup Sagas
  ---------
  rehydration is to get local storage data
  and restore it into the global state
*/

const { Types, Creators } = createActions({
  startup: null,
  setRehydrationComplete: null,
})

export const StartupTypes = Types
export default Creators

/* --- Initial State --- */

export const INITIAL_STATE = Immutable({
  rehydrationComplete: false,
})

/* --- Reducers --- */

// rehydration is complete
export const setRehydrationComplete = (state: Object) =>
  state.merge({ rehydrationComplete: true })

/* --- Hookup Reducers To Types --- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_REHYDRATION_COMPLETE]: setRehydrationComplete,
})

/* --- Selectors --- */

// Is rehydration complete?
export const isRehydrationComplete = (state: Object) =>
  state.rehydrationComplete
