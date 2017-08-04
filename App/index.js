import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'Config/App'
import { createStore, applyMiddleware } from 'redux'
import users from 'Redux/Modules/Users'
import thunk from 'redux-thunk' // allows for action creators to pass functions that dispatch other action creators

const store = createStore(users, applyMiddleware(thunk))

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
