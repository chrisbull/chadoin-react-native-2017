import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createChatRequest: ['chat'],
  updateChatRequest: ['chat'],

  createMessageRequest: ['chat', 'message'],
  updateMessageRequest: ['message'],

  // api callbacks
  chatSuccess: null,
  chatFailure: ['error'],
  messageSuccess: null,
  messageFailure: ['error'],

  // listeners
  syncChats: ['chats'],
  syncChat: ['chats'],

  // navigation
  gotoCreateChat: null,
  gotoEditChat: ['chat'],
  gotoChat: ['chat'],
})

export const ChatTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  chat: {},
  chats: [],
  error: null,
})

/* ------------- Reducers ------------- */

export const syncChats = (state, { chats }) => state.merge({ chats })

export const syncChat = (state, { chats }) => {
  const { chat } = state
  const updatedChat = chats.filter(newChat => chat.id === newChat.id)

  console.log('updatedChat', updatedChat)

  return state.merge({ chat: updatedChat })
}

export const chatRequest = state => state

export const chatSuccess = state => state

export const chatFailure = (state, { error }) => state.merge({ error })

export const messageRequest = state => state

export const messageSuccess = state => state

export const messageFailure = (state, { error }) => state.merge({ error })

export const gotoChat = (state, { chat }) => state.merge({ chat })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_CHAT_REQUEST]: chatRequest,
  [Types.UPDATE_CHAT_REQUEST]: chatRequest,
  [Types.CHAT_SUCCESS]: chatSuccess,
  [Types.CHAT_FAILURE]: chatFailure,

  [Types.CREATE_MESSAGE_REQUEST]: messageRequest,
  [Types.UPDATE_MESSAGE_REQUEST]: messageRequest,
  [Types.MESSAGE_SUCCESS]: messageSuccess,
  [Types.MESSAGE_FAILURE]: messageFailure,

  // listeners
  [Types.SYNC_CHATS]: syncChats,
  [Types.SYNC_CHAT]: syncChat,

  // navigation
  [Types.GOTO_CREATE_CHAT]: gotoChat,
  [Types.GOTO_EDIT_CHAT]: gotoChat,
  [Types.GOTO_CHAT]: gotoChat,
})

/* ------------- Selectors ------------- */
