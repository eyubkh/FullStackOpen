import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'

// Reducer
import { userReducer } from './reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
export const store = createStore(userReducer, composeEnhancers(applyMiddleware(Thunk)))
