import { createStore } from 'redux'
import { anecdoteReducer } from './reducers/anecdoteReducer'

export const store = createStore(anecdoteReducer)
