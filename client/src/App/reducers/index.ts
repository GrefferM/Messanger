import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Auth from '~reducers/auth'

export default (history : History) => combineReducers({
    Auth,
    router: connectRouter(history)
})