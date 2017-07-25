import { fork, takeLatest, put, call, take } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import EventActions, { EventTypes } from '../Redux/EventRedux'
import fireApp from '../Services/FirebaseApp'

export function* createNewEventSaga({ event }) {
  try {
    const fireEventId = yield call(fireApp.database.create, 'events', event)
    yield put(EventActions.newEventSuccess({ id: fireEventId, ...event }))
  } catch (e) {
    yield put(EventActions.newEventFailure(e))
  }
}

export function* syncEventsSaga() {
  const channel = yield call(fireApp.database.channel, 'events')

  while (true) {
    const { value: events } = yield take(channel)
    yield put(
      EventActions.syncEvents(
        Object.keys(events).map(key => ({ ...events[key], id: key })),
      ),
    )
  }
}

export function* editEventSaga({ event }) {
  yield put(NavigationActions.navigate({ routeName: 'EditEventScreen' }))
}

export function* newEventSaga() {
  yield put(NavigationActions.navigate({ routeName: 'NewEventScreen' }))
}

/* ----- export sagas ----- */
export const onDemandActions = [
  takeLatest(EventTypes.NEW_EVENT_REQUEST, createNewEventSaga),
  takeLatest(EventTypes.NEW_EVENT, newEventSaga),
  takeLatest(EventTypes.EDIT_EVENT, editEventSaga),
]

export const watcherActions = [fork(syncEventsSaga)]

export default [...onDemandActions, ...watcherActions]
