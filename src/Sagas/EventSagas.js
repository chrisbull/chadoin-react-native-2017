import { fork, takeLatest, put, call, take } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import EventActions, { EventTypes } from '../Redux/EventRedux'
import fireApp from '../Services/FirebaseApp'

/* ----- All Events Sagas ----- */

export function* syncEventsSaga() {
  const channel = yield call(fireApp.database.channel, 'events')

  while (true) {
    const { value } = yield take(channel)
    const events = value || []

    yield put(
      EventActions.syncEvents(
        Object.keys(events).map(key => ({
          ...events[key],
          id: key,
        })),
      ),
    )
  }
}

/* ----- Single Event Sagas ----- */

export function* createEventSaga({ event }) {
  try {
    const fireEventId = yield call(fireApp.database.create, 'events', event)
    yield put(EventActions.eventSuccess({ id: fireEventId, ...event }))
    yield put(NavigationActions.back({}))
  } catch (e) {
    yield put(EventActions.eventFailure(e))
  }
}

export function* updateEventSaga({ event }) {
  try {
    const { id, ...data } = event
    yield call(fireApp.database.update, `events/${id}`, data)
    yield put(EventActions.eventSuccess(event))
    yield put(NavigationActions.back({}))
  } catch (e) {
    yield put(EventActions.eventFailure(e))
  }
}

export function* deleteEventSaga({ event }) {
  try {
    const { id } = event
    yield call(fireApp.database.delete, `events/${id}`)
    yield put(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'EventsList' })],
      }),
    )
  } catch (e) {
    yield put(EventActions.eventFailure(e))
  }
}

/* ----- Navigation Sagas ----- */

export function* gotoNewEventScreen() {
  yield put(NavigationActions.navigate({ routeName: 'CreateEvent' }))
}

export function* gotoEditEventScreen() {
  yield put(NavigationActions.navigate({ routeName: 'EditEvent' }))
}

export function* gotoEventScreen() {
  yield put(NavigationActions.navigate({ routeName: 'ViewEvent' }))
}

export function* gotoEventListScreen() {
  yield put(NavigationActions.navigate({ routeName: 'EventsList' }))
}

/* ----- Export Sagas ----- */

const EventSagas = [
  // -- Sync
  fork(syncEventsSaga),

  // -- Create/Update Event
  takeLatest(EventTypes.CREATE_EVENT_REQUEST, createEventSaga),
  takeLatest(EventTypes.UPDATE_EVENT_REQUEST, updateEventSaga),
  takeLatest(EventTypes.DELETE_EVENT_REQUEST, deleteEventSaga),

  // -- Navigation
  takeLatest(EventTypes.GOTO_NEW_EVENT, gotoNewEventScreen),
  takeLatest(EventTypes.GOTO_EDIT_EVENT, gotoEditEventScreen),
  takeLatest(EventTypes.GOTO_EVENT, gotoEventScreen),
  takeLatest(EventTypes.GOTO_EVENT_LIST, gotoEventListScreen),
]

export default EventSagas
