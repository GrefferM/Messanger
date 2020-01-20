import * as R from 'ramda'

import {
    ACTION_GET_PRODUCT_CATEGORY_SUCCESS,
    iGetProductCategoryAction
} from '~actionType/category'

const initialState = {}

export default (state = initialState, action: iGetProductCategoryAction) => {
    switch (action.type) {
        case ACTION_GET_PRODUCT_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}