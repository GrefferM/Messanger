import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Auth from '~reducers/auth'
import Category from '~reducers/category'
import Props from '~reducers/props'

export default (history : History) => combineReducers({
    Auth,
    Category,
    Props,
    router: connectRouter(history)
})