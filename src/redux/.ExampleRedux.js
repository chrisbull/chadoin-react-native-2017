import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  example: ['foo', 'bar'],
})

export const ExampleTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  foo: null,
  bar: null,
})

/* ------------- Reducers ------------- */

export const exampleReducer = (state, { foo, bar }) => state.merge({ foo, bar })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EXAMPLE]: exampleReducer,
})

/* ------------- Selectors ------------- */

export const selectFooFromState = state => state.foo !== null
