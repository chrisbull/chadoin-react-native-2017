import { fork, put, call, take } from 'redux-saga/effects'

import EventActions from '../Redux/EventRedux'

import fireApp from '../Services/FirebaseApp'

function* createNewEventSaga({ event }) {
  try {
    const fireEventId = yield call(fireApp.database.create, 'events', event)
    yield put(EventActions.newEventSuccess({ id: fireEventId, ...event }))
  } catch (e) {
    yield put(EventActions.newEventFailure(e))
  }
}

function* syncEventsSaga() {
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

export const eventSagas = [fork(createNewEventSaga), fork(syncEventsSaga)]
