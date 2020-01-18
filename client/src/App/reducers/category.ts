import * as R from 'ramda'

import {
    ACTION_ADD_BASE_CATEGORY_SUCCESS,
    ACTION_GET_BASE_CATEGORY_SUCCESS,
    iAddBaseCategoryAction,
    iGetBaseCategoryAction
} from '~actionType/category'

const initialState = {}

type Action = iAddBaseCategoryAction & iGetBaseCategoryAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_ADD_BASE_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        case ACTION_GET_BASE_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}