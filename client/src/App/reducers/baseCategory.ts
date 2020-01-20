import * as R from 'ramda'

import {
    ACTION_GET_BASE_CATEGORY_SUCCESS,
    iGetBaseCategoryAction
} from '~actionType/category'

const initialState = {}

export default (state = initialState, action: iGetBaseCategoryAction) => {
    switch (action.type) {
        case ACTION_GET_BASE_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}