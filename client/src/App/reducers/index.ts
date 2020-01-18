import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Auth from '~reducers/auth'
import Category from '~reducers/category'

export default (history : History) => combineReducers({
    Auth,
    Category,
    router: connectRouter(history)
})