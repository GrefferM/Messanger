import * as R from 'ramda'

import {
    ACTION_GET_CATEGORY_BASE_SUCCESS,
    iGetCategoryBaseAction
} from '~actionType/category'

const initialState = {}

export default (state = initialState, action: iGetCategoryBaseAction) => {
    switch (action.type) {
        case ACTION_GET_CATEGORY_BASE_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}