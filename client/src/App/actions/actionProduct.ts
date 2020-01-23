import { Dispatch } from 'redux'

import {
    ACTION_ADD_PRODUCT_START,
    ACTION_ADD_PRODUCT_SUCCESS,
    ACTION_ADD_PRODUCT_FAILURE,
} from '~actionType/product'
import {
    apiAddProduct as apiAddProductApi,
} from '~api/apiProduct'
import { iProduct } from '~interface/iProduct'

export const actionAddProduct = (value: iProduct, jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ADD_PRODUCT_START })

    try {
        const data = await apiAddProductApi(value, jsonwebtoken)
        dispatch({
            type: ACTION_ADD_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_ADD_PRODUCT_FAILURE,
            payload: err,
            error: true
        })
    }
}