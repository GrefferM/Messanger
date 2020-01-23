import { Dispatch } from 'redux'

import {
    ACTION_ADD_CATEGORY_BASE_START,
    ACTION_ADD_CATEGORY_BASE_SUCCESS,
    ACTION_ADD_CATEGORY_BASE_FAILURE,

    ACTION_GET_CATEGORY_BASE_START,
    ACTION_GET_CATEGORY_BASE_SUCCESS,
    ACTION_GET_CATEGORY_BASE_FAILURE,

    ACTION_ADD_CATEGORY_PRODUCT_START,
    ACTION_ADD_CATEGORY_PRODUCT_SUCCESS,
    ACTION_ADD_CATEGORY_PRODUCT_FAILURE,

    ACTION_GET_CATEGORY_PRODUCT_START,
    ACTION_GET_CATEGORY_PRODUCT_SUCCESS,
    ACTION_GET_CATEGORY_PRODUCT_FAILURE
} from '~actionType/category'
import {
    apiAddCategoryBase as apiAddBaseCategoryApi,
    apiGetCategoryBase as apiGetBaseCategoryApi,
    apiAddCategoryProduct as apiAddProductCategoryApiApi,
    apiGetCategoryProduct as apiGetProductCategoryApi
} from '~api/apiCategory'
import { 
    iCategoryBase, 
    iCategoryProduct 
} from '~interface/iCategory'

export const actionAddCategoryBase = (value: iCategoryBase, jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ADD_CATEGORY_BASE_START })

    try {
        const data = await apiAddBaseCategoryApi(value, jsonwebtoken)
        dispatch({
            type: ACTION_ADD_CATEGORY_BASE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_ADD_CATEGORY_BASE_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionGetCategoryBase = (jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_GET_CATEGORY_BASE_START })

    try {
        const data = await apiGetBaseCategoryApi(jsonwebtoken)
        dispatch({
            type: ACTION_GET_CATEGORY_BASE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_GET_CATEGORY_BASE_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionAddCategoryProduct = (value: iCategoryProduct, jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ADD_CATEGORY_PRODUCT_START })

    try {
        const data = await apiAddProductCategoryApiApi(value, jsonwebtoken)
        dispatch({
            type: ACTION_ADD_CATEGORY_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_ADD_CATEGORY_PRODUCT_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionGetCategoryProduct = (jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_GET_CATEGORY_PRODUCT_START })

    try {
        const data = await apiGetProductCategoryApi(jsonwebtoken)
        dispatch({
            type: ACTION_GET_CATEGORY_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_GET_CATEGORY_PRODUCT_FAILURE,
            payload: err,
            error: true
        })
    }
}