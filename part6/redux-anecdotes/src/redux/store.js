import { createStore } from 'redux'
import { reducer } from './reducers/anecdoteReducer'

export const store = createStore(reducer)
