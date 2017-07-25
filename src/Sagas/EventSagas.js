import { fork, takeLatest, put, call, take } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import EventActions, { EventTypes } from '../Redux/EventRedux'
import fireApp from '../Services/FirebaseApp'

/* ----- Single Event Sagas ----- */

export function* createEventSaga({ event }) {
  try {
    const fireEventId = yield call(fireApp.database.create, 'events', event)
    yield put(EventActions.eventSuccess({ id: fireEventId, ...event }))
  } catch (e) {
    yield put(EventActions.eventFailure(e))
  }
}

export function* updateEventSaga({ event }) {
  try {
    const { id, ...data } = event
    yield call(fireApp.database.update, `events/${id}`, data)
    yield put(EventActions.eventSuccess(event))
  } catch (e) {
    yield put(EventActions.eventFailure(e))
  }
}

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

/* ----- Navigation Sagas ----- */

export function* gotoEvent() {
  yield put(NavigationActions.navigate({ routeName: 'EventScreen' }))
}

export function* gotoNewEvent() {
  yield put(NavigationActions.navigate({ routeName: 'NewEventScreen' }))
}

/* ----- Export Sagas ----- */

export const onDemandActions = [
  takeLatest(EventTypes.CREATE_EVENT_REQUEST, createEventSaga),
  takeLatest(EventTypes.UPDATE_EVENT_REQUEST, updateEventSaga),

  // navigation
  takeLatest(EventTypes.GOTO_EVENT, gotoEvent),
  takeLatest(EventTypes.GOTO_NEW_EVENT, gotoNewEvent),
]

export const watcherActions = [fork(syncEventsSaga)]

export default [...onDemandActions, ...watcherActions]
