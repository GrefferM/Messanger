import * as R from 'ramda'

import {
    ACTION_ADD_BASE_CATEGORY_SUCCESS,
    ACTION_ADD_PRODUCT_CATEGORY_SUCCESS,
    iAddBaseCategoryAction,
    iAddProductCategoryAction
} from '~actionType/category'

const initialState = {}

type Action = iAddBaseCategoryAction & iAddProductCategoryAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_ADD_BASE_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        case ACTION_ADD_PRODUCT_CATEGORY_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}