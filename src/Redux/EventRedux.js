import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createEventRequest: ['event'],
  updateEventRequest: ['event'],

  // api callbacks
  eventSuccess: ['event'],
  eventFailure: ['error'],

  // listeners
  syncEvents: ['events'],

  // navigation
  gotoEvent: ['event'],
  gotoNewEvent: null,
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

export const updateEvents = (state, { events }) => state.merge({ events })
export const updateEvent = (state, { event }) => state.merge({ event })
export const updateError = (state, { error }) => state.merge({ error })
export const none = state => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_EVENT_REQUEST]: updateEvent,
  [Types.UPDATE_EVENT_REQUEST]: updateEvent,
  [Types.EVENT_SUCCESS]: updateEvent,
  [Types.EVENT_FAILURE]: updateError,

  // listeners
  [Types.SYNC_EVENTS]: updateEvents,

  // navigation
  [Types.GOTO_EVENT]: updateEvent,
  [Types.GOTO_NEW_EVENT]: none,
})

/* ------------- Selectors ------------- */
