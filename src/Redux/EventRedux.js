import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  syncEvents: ['events'],
  newEvent: null,
  newEventRequest: ['event'],
  newEventSuccess: ['event'],
  newEventFailure: ['error'],
  editEvent: ['event'],
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

/* -- Sync Events -- */
export const syncEvents = (state, { events }) => state.merge({ events })

/* -- New Event -- */
export const newEvent = state => state

export const newEventRequest = (state, { event }) =>
  state.merge({ event, saving: true })

export const newEventSuccess = (state, { event }) =>
  state.merge({ event, saving: false })

export const newEventFailure = (state, { error }) =>
  state.merge({ error, saving: false })

/* -- Edit Event -- */
export const editEvent = (state, { event }) => state.merge({ event })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_EVENTS]: syncEvents,
  [Types.NEW_EVENT]: newEvent,
  [Types.NEW_EVENT_REQUEST]: newEventRequest,
  [Types.NEW_EVENT_SUCCESS]: newEventSuccess,
  [Types.NEW_EVENT_FAILURE]: newEventFailure,
  [Types.EDIT_EVENT]: editEvent,
})

/* ------------- Selectors ------------- */
