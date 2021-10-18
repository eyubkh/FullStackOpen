import { createStore } from 'redux'
import { counterReducer } from './reducer/countreReducer'

export const store = createStore(counterReducer)