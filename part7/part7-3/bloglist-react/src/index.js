import React from 'react'
import ReactDOM from 'react-dom'
// components
import App from './App'
// Redux
import { Provider } from 'react-redux'
import { store } from './redux'
// Css
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
