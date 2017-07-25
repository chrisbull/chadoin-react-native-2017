import { fork, takeLatest, put, call, take } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import ChatActions, { ChatTypes } from '../Redux/ChatRedux'
import fireApp from '../Services/FirebaseApp'

/* ----- All Chats Sagas ----- */

export function* syncChatsSaga() {
  const channel = yield call(fireApp.database.channel, 'chats')

  while (true) {
    const { value } = yield take(channel)
    const chats = value || []

    yield put(
      ChatActions.syncChats(
        Object.keys(chats).map(key => ({
          ...chats[key],
          id: key,
        })),
      ),
    )
  }
}

export function* syncChatSaga({ chats }) {
  yield put(ChatActions.syncChat(chats))
}

/* ----- Single Chat Sagas ----- */

export function* createChatSaga({ chat }) {
  try {
    const id = yield call(fireApp.database.create, 'chats', chat)
    yield put(ChatActions.chatSuccess({ id, ...chat }))
  } catch (e) {
    yield put(ChatActions.chatFailure(e))
  }
}

export function* updateChatSaga({ chat }) {
  try {
    const { id, ...data } = chat
    yield call(fireApp.database.update, `chats/${id}`, data)
    yield put(ChatActions.chatSuccess(chat))
  } catch (e) {
    yield put(ChatActions.chatFailure(e))
  }
}

/* ----- Single Message Sagas ----- */

export function* createChatMessageSaga({ chat, message }) {
  try {
    yield call(fireApp.database.create, `chats/${chat.id}/messages`, message)
    yield put(ChatActions.messageSuccess())
  } catch (e) {
    yield put(ChatActions.messageFailure(e))
  }
}

export function* updateChatMessageSaga({ chat, message }) {
  try {
    yield call(
      fireApp.database.update,
      `chats/${chat.id}/messages/${message.id}`,
      message,
    )
    yield put(ChatActions.messageSuccess())
  } catch (e) {
    yield put(ChatActions.messageFailure(e))
  }
}

/* ----- Navigation Sagas ----- */

export function* gotoCreateChat() {
  yield put(NavigationActions.navigate({ routeName: 'ChatCreateScreen' }))
}

export function* gotoEditChat() {
  yield put(NavigationActions.navigate({ routeName: 'ChatEditScreen' }))
}

export function* gotoChat() {
  yield put(NavigationActions.navigate({ routeName: 'ChatMessageScreen' }))
}

/* ----- Export Sagas ----- */

export const onDemandActions = [
  takeLatest(ChatTypes.CREATE_CHAT_REQUEST, createChatSaga),
  takeLatest(ChatTypes.UPDATE_CHAT_REQUEST, updateChatSaga),
  takeLatest(ChatTypes.CREATE_MESSAGE_REQUEST, createChatMessageSaga),
  takeLatest(ChatTypes.UPDATE_MESSAGE_REQUEST, updateChatMessageSaga),

  // navigation
  takeLatest(ChatTypes.GOTO_CREATE_CHAT, gotoCreateChat),
  takeLatest(ChatTypes.GOTO_EDIT_CHAT, gotoEditChat),
  takeLatest(ChatTypes.GOTO_CHAT, gotoChat),
  takeLatest(ChatTypes.SYNC_CHATS, syncChatSaga),
]

export const watcherActions = [fork(syncChatsSaga)]

export default [...onDemandActions, ...watcherActions]
