import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { anecdotesReducer } from './reducers/anecdoteReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { filterReducer } from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notification: notificationReducer,
  filter: filterReducer
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
