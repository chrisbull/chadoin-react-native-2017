import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  syncEvents: ['events'],
  newEventRequest: ['event'],
  newEventSuccess: ['event'],
  newEventFailure: ['error']
})

export const EventTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  event: {},
  events: [],
  saving: false,
  error: null
})

/* ------------- Reducers ------------- */

// Sync Events

export const sync_events = (state, {events}) => {
  console.tron.log('EventRedux -> sync_events')
  return state.merge({events})
}

// New Event

export const new_event_request = (state, {event}) => {
  console.tron.log('EventRedux -> new_event_request:', event)
  return state.merge({event, saving: true})
}

export const new_event_success = (state, {event}) => {
  console.tron.log('EventRedux -> new_event_success:', event)
  return state.merge({event, saving: false})
}

export const new_event_failure = (state, {error}) => {
  console.tron.log('EventRedux -> new_event_failure:', error)
  return state.merge({saving: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_EVENTS]: sync_events,
  [Types.NEW_EVENT_REQUEST]: new_event_request,
  [Types.NEW_EVENT_SUCCESS]: new_event_success,
  [Types.NEW_EVENT_FAILURE]: new_event_failure
})

/* ------------- Selectors ------------- */
