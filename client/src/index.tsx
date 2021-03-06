import React from 'react'
import ReactDOM from 'react-dom'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider, ReactReduxContext } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'

import createRootReducer from '~reducers/index'
import routes from '~routes/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)