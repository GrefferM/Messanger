import iProps from '~interface/iProps'

export const ACTION_ADD_PRODUCT_START      = 'ACTION_ADD_PRODUCT_START'
export const ACTION_ADD_PRODUCT_SUCCESS    = 'ACTION_ADD_PRODUCT_SUCCESS'
export const ACTION_ADD_PRODUCT_FAILURE    = 'ACTION_ADD_PRODUCT_FAILURE'

export interface iAddProductAction {
    type: typeof ACTION_ADD_PRODUCT_SUCCESS
    payload: iProps
}