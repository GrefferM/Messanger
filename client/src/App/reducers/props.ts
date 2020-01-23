import * as R from 'ramda'

import {
    ACTION_ADD_CATEGORY_BASE_SUCCESS,
    ACTION_ADD_CATEGORY_PRODUCT_SUCCESS,
    iAddCategoryBaseAction,
    iAddCategoryProductAction
} from '~actionType/category'
import {
    ACTION_ADD_PRODUCT_SUCCESS,
    iAddProductAction
} from '~actionType/product'

const initialState = {}

type Action = iAddProductAction & iAddCategoryBaseAction & iAddCategoryProductAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_ADD_PRODUCT_SUCCESS:
            return R.merge(state, action.payload)
        case ACTION_ADD_CATEGORY_BASE_SUCCESS:
            return R.merge(state, action.payload)
        case ACTION_ADD_CATEGORY_PRODUCT_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}