import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // -- Syncing
  syncChats: ['chats'],
  syncChat: ['chats'],

  // -- Create/Update Chat
  createChatRequest: ['chat'],
  updateChatRequest: ['chat'],
  chatSuccess: null,
  chatFailure: ['error'],

  // -- Create/Update Message
  createMessageRequest: ['chat', 'message'],
  updateMessageRequest: ['message'],
  messageSuccess: null,
  messageFailure: ['error'],

  // -- Navigation
  gotoNewChat: null,
  gotoEditChat: null,
  gotoChat: ['chat'],
})

export const ChatTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  chat: {},
  list: [],
  error: null,
})

/* ------------- Reducers ------------- */

export const setChats = (state, { chats }) => state.merge({ list: chats })
export const setChat = (state, { chat }) => state.merge({ chat })
export const setError = (state, { error }) => state.merge({ error })
export const none = state => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  // -- Create/Update Chat
  // [Types.CREATE_CHAT_REQUEST]: none,
  // [Types.UPDATE_CHAT_REQUEST]: none,
  // [Types.CHAT_SUCCESS]: none,
  [Types.CHAT_FAILURE]: setError,

  // -- Create/Update Message
  // [Types.CREATE_MESSAGE_REQUEST]: none,
  // [Types.UPDATE_MESSAGE_REQUEST]: none,
  // [Types.MESSAGE_SUCCESS]: none,
  [Types.MESSAGE_FAILURE]: setError,

  // -- Listeners
  [Types.SYNC_CHATS]: setChats,
  [Types.SYNC_CHAT]: setChat,

  // -- Navigation
  // [Types.GOTO_NEW_CHAT]: none,
  // [Types.GOTO_EDIT_CHAT]: none,
  [Types.GOTO_CHAT]: setChat,
})
