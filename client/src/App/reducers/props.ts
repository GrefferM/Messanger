import * as R from 'ramda'

import {
    ACTION_ADD_BASE_CATEGORY_SUCCESS,
    iAddBaseCategoryAction
} from '~actionType/category'

const initialState = {}

export default (state = initialState, action: iAddBaseCategoryAction) => {
    switch (action.type) {
        case ACTION_ADD_BASE_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}