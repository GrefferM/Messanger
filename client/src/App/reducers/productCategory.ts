import * as R from 'ramda'

import {
    ACTION_GET_CATEGORY_PRODUCT_SUCCESS,
    iGetCategoryProductAction
} from '~actionType/category'

const initialState = {}

export default (state = initialState, action: iGetCategoryProductAction) => {
    switch (action.type) {
        case ACTION_GET_CATEGORY_PRODUCT_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}