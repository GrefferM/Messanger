import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Auth from '~reducers/auth'
import ProductCategory from '~reducers/productCategory'
import BaseCategory from '~reducers/baseCategory'
import Props from '~reducers/props'

export default (history : History) => combineReducers({
    Auth,
    ProductCategory,
    BaseCategory,
    Props,
    router: connectRouter(history)
})