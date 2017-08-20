import { fork, takeLatest, put, call, take, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import ChatActions, { ChatTypes } from '../redux/ChatRedux'
import fireApp from '../services/FirebaseApp'

/* ----- All Chats Sagas ----- */

export function* syncChatsSaga() {
  console.log('Saga: syncChatsSaga')

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

    yield put(ChatActions.syncChatsComplete())
  }
}

export const selectChatFromChats = state => {
  console.log('Saga: selectChatFromChats')

  return state.chats.list.find(c => c.id === state.chats.chat.id)
}

export function* syncChatSaga() {
  console.log('Saga: syncChatSaga')

  const chat = yield select(selectChatFromChats)
  yield put(ChatActions.syncChat(chat))
}

/* ----- Single Chat Sagas ----- */

export function* createChatSaga({ chat }) {
  console.log('Saga: createChatSaga')

  try {
    yield call(fireApp.database.create, 'chats', chat)
    yield put(ChatActions.chatSuccess())
  } catch (e) {
    yield put(ChatActions.chatFailure(e))
  }
}

export function* updateChatSaga({ chat }) {
  console.log('Saga: updateChatSaga')

  try {
    const { id, ...data } = chat
    yield call(fireApp.database.update, `chats/${id}`, data)
    yield put(ChatActions.chatSuccess())
  } catch (e) {
    yield put(ChatActions.chatFailure(e))
  }
}

/* ----- Single Message Sagas ----- */

export function* createChatMessageSaga({ chat, message }) {
  console.log('Saga: createChatMessageSaga')

  try {
    yield call(fireApp.database.create, `chats/${chat.id}/messages`, message)
    yield put(ChatActions.messageSuccess())
  } catch (e) {
    yield put(ChatActions.messageFailure(e))
  }
}

export function* updateChatMessageSaga({ chat, message }) {
  console.log('Saga: updateChatMessageSaga')

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

export function* gotoNewChatScreen() {
  console.log('Saga: gotoNewChatScreen')
  yield put(NavigationActions.navigate({ routeName: 'NewChat' }))
}

export function* gotoEditChatScreen() {
  console.log('Saga: gotoEditChatScreen')
  yield put(NavigationActions.navigate({ routeName: 'EditChat' }))
}

export function* gotoChatMessagesScreen() {
  console.log('Saga: gotoChatMessagesScreen')
  yield put(NavigationActions.navigate({ routeName: 'ChatMessages' }))
}

/* ----- Export Sagas ----- */

const ChatSagas = [
  // -- Sync
  fork(syncChatsSaga),
  takeLatest(ChatTypes.SYNC_CHATS_COMPLETE, syncChatSaga),

  // -- Create/Update Chat
  takeLatest(ChatTypes.CREATE_CHAT_REQUEST, createChatSaga),
  takeLatest(ChatTypes.UPDATE_CHAT_REQUEST, updateChatSaga),

  // -- Create/Update Chat Message
  takeLatest(ChatTypes.CREATE_MESSAGE_REQUEST, createChatMessageSaga),
  takeLatest(ChatTypes.UPDATE_MESSAGE_REQUEST, updateChatMessageSaga),

  // -- Navigation
  takeLatest(ChatTypes.GOTO_NEW_CHAT, gotoNewChatScreen),
  takeLatest(ChatTypes.GOTO_EDIT_CHAT, gotoEditChatScreen),
  takeLatest(ChatTypes.GOTO_CHAT, gotoChatMessagesScreen),
]

export default ChatSagas
