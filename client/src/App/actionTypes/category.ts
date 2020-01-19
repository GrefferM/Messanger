import iCategory from '~interface/iCategory'
import iProps from '~interface/iProps'

export const ACTION_ADD_BASE_CATEGORY_START = 'ACTION_ADD_BASE_CATEGORY_START'
export const ACTION_ADD_BASE_CATEGORY_SUCCESS = 'ACTION_ADD_BASE_CATEGORY_SUCCESS'
export const ACTION_ADD_BASE_CATEGORY_FAILURE = 'ACTION_ADD_BASE_CATEGORY_FAILURE'
export const ACTION_GET_BASE_CATEGORY_START = 'ACTION_GET_BASE_CATEGORY_START'
export const ACTION_GET_BASE_CATEGORY_SUCCESS = 'ACTION_GET_BASE_CATEGORY_SUCCESS'
export const ACTION_GET_BASE_CATEGORY_FAILURE = 'ACTION_GET_BASE_CATEGORY_FAILURE'

export interface iAddBaseCategoryAction {
    type: typeof ACTION_ADD_BASE_CATEGORY_SUCCESS
    payload: iProps
}
export interface iGetBaseCategoryAction {
    type: typeof ACTION_GET_BASE_CATEGORY_SUCCESS
    payload: iCategory
}