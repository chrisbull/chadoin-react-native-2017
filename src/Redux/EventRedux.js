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

export const syncEvents = (state, { events }) => state.merge({ events })

export const eventRequest = (state, { event }) =>
  state.merge({ event, saving: true })

export const eventSuccess = (state, { event }) =>
  state.merge({ event, saving: false })

export const eventFailure = (state, { error }) =>
  state.merge({ error, saving: false })

export const gotoEvent = (state, { event = {} }) => state.merge({ event })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_EVENT_REQUEST]: eventRequest,
  [Types.UPDATE_EVENT_REQUEST]: eventRequest,
  [Types.EVENT_SUCCESS]: eventSuccess,
  [Types.EVENT_FAILURE]: eventFailure,

  // listeners
  [Types.SYNC_EVENTS]: syncEvents,

  // navigation
  [Types.GOTO_EVENT]: gotoEvent,
})

/* ------------- Selectors ------------- */
