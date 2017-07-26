import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // -- Syncing
  syncEvents: ['events'],
  syncEventsComplete: null,
  syncEvent: ['event'],

  // -- Create/Update Event
  createEventRequest: ['event'],
  updateEventRequest: ['event'],

  // -- API Callbacks
  eventSuccess: ['event'],
  eventFailure: ['error'],

  // -- Navigation
  gotoNewEvent: null,
  gotoEvent: ['event'],
  gotoEventList: null,
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

export const setEvents = (state, { events }) => state.merge({ list: events })
export const setEvent = (state, { event }) => state.merge({ event })
export const setError = (state, { error }) => state.merge({ error })
export const none = state => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  // -- Create/Update Event
  [Types.EVENT_SUCCESS]: setEvent,
  [Types.EVENT_FAILURE]: setError,

  // -- Listeners
  [Types.SYNC_EVENTS]: setEvents,

  // -- Navigation
  [Types.GOTO_EVENT]: setEvent,
  [Types.GOTO_EVENT_LIST]: none,
})

/* ------------- Selectors ------------- */
