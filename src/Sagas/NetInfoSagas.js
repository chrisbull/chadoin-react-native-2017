import { NetInfo } from 'react-native'
import { eventChannel } from 'redux-saga'
import { fork, put, call, take } from 'redux-saga/effects'
import NetInfoActions from '../Redux/NetInfoRedux'

export function createConnectionChannel() {
  return eventChannel(emit => {
    const changeHandler = isConnected => {
      emit(isConnected)
    }

    // setup the subscription
    NetInfo.isConnected.addEventListener('change', changeHandler)

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      NetInfo.isConnected.removeEventListener('change', changeHandler)
    }

    return unsubscribe
  })
}

export function* getConnectionStatus() {
  const isConnected = yield call(NetInfo.isConnected.fetch)
  yield put(NetInfoActions.changeConnectionStatus(isConnected))
}

export function* watchConnectionStatus() {
  const channel = yield call(createConnectionChannel)

  while (true) {
    const isConnected = yield take(channel)
    yield put(NetInfoActions.changeConnectionStatus(isConnected))
  }
}

export default [take(getConnectionStatus), fork(watchConnectionStatus)]
