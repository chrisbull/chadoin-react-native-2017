import {call, fork, put, select, take, takeEvery} from 'redux-saga/effects'
import EventActions, {EventTypes} from '../Redux/EventRedux'
import fbApp from '../Services/FirebaseApp'

export function* createNewEvent({event}) {
  try {
    const fbEventId = yield call(fbApp.database.create, 'events', event)
    yield put(
      EventActions.newEventSuccess({
        id: fbEventId,
        ...event,
      }),
    )
  } catch (e) {
    yield put(EventActions.newEventFailure(e))
  }
}

export function* syncEvents() {
  const channel = yield call(fbApp.channel, 'events')

  // This creates an infinite loop listener
  while (true) {
    const events = yield take(channel)
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
