import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  syncEvents: ['events'],
  newEventRequest: ['event'],
  newEventSuccess: ['event'],
  newEventFailure: ['error'],
})

export const EventTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  event: {},
  events: [],
  saving: false,
})

/* ------------- Reducers ------------- */

export const sync = (state, {events}) => {
  console.log('EventRedux -> sync:', events)
  return state.merge({events})
}

export const request = (state, {event}) => {
  console.log('EventRedux -> request:', event)
  return state.merge({event, saving: true})
}

export const success = (state, {event}) => {
  console.log('EventRedux -> success:', event)
  return state.merge({event, saving: false})
}

export const failure = (state, {error}) => {
  console.log('EventRedux -> failure:', error)
  return state.merge({saving: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_EVENTS]: sync,
  [Types.NEW_EVENT_REQUEST]: request,
  [Types.NEW_EVENT_SUCCESS]: success,
  [Types.NEW_EVENT_FAILURE]: failure,
})

/* ------------- Selectors ------------- */
