import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
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
  error: null,
})

/* ------------- Reducers ------------- */

// Sync Events

export const syncEvents = (state, { events }) => {
  console.tron.log('EventRedux -> sync_events')
  return state.merge({ events })
}

// New Event

const newEventRequest = (state, { event }) => {
  console.tron.log('EventRedux -> new_event_request:', event)
  return state.merge({ event, saving: true })
}

const newEventSuccess = (state, { event }) => {
  console.tron.log('EventRedux -> new_event_success:', event)
  return state.merge({ event, saving: false })
}

export const newEventFailure = (state, { error }) => {
  console.tron.log('EventRedux -> new_event_failure:', error)
  return state.merge({ saving: false })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_EVENTS]: syncEvents,
  [Types.NEW_EVENT_REQUEST]: newEventRequest,
  [Types.NEW_EVENT_SUCCESS]: newEventSuccess,
  [Types.NEW_EVENT_FAILURE]: newEventFailure,
})

/* ------------- Selectors ------------- */
