import { Dispatch } from 'redux'

import {
    ACTION_ADD_BASE_CATEGORY_START,
    ACTION_ADD_BASE_CATEGORY_SUCCESS,
    ACTION_ADD_BASE_CATEGORY_FAILURE,

    ACTION_GET_BASE_CATEGORY_START,
    ACTION_GET_BASE_CATEGORY_SUCCESS,
    ACTION_GET_BASE_CATEGORY_FAILURE,

    ACTION_ADD_PRODUCT_CATEGORY_START,
    ACTION_ADD_PRODUCT_CATEGORY_SUCCESS,
    ACTION_ADD_PRODUCT_CATEGORY_FAILURE,

    ACTION_GET_PRODUCT_CATEGORY_START,
    ACTION_GET_PRODUCT_CATEGORY_SUCCESS,
    ACTION_GET_PRODUCT_CATEGORY_FAILURE
} from '~actionType/category'
import {
    apiAddBaseCategory as apiAddBaseCategoryApi,
    apiGetBaseCategory as apiGetBaseCategoryApi,
    apiAddProductCategory as apiAddProductCategoryApiApi,
    apiGetProductCategory as apiGetProductCategoryApi
} from '~api/apiCategory'
import { iBaseCategory } from '~interface/iCategory'

export const actionAddBaseCategory = (value: iBaseCategory, jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ADD_BASE_CATEGORY_START })

    try {
        const data = await apiAddBaseCategoryApi(value, jsonwebtoken)
        dispatch({
            type: ACTION_ADD_BASE_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_ADD_BASE_CATEGORY_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionGetBaseCategory = (jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_GET_BASE_CATEGORY_START })

    try {
        const data = await apiGetBaseCategoryApi(jsonwebtoken)
        dispatch({
            type: ACTION_GET_BASE_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_GET_BASE_CATEGORY_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionAddProductCategory = (value: iBaseCategory, jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ADD_PRODUCT_CATEGORY_START })

    try {
        const data = await apiAddProductCategoryApiApi(value, jsonwebtoken)
        dispatch({
            type: ACTION_ADD_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_ADD_PRODUCT_CATEGORY_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionGetProductCategory = (jsonwebtoken: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_GET_PRODUCT_CATEGORY_START })

    try {
        const data = await apiGetProductCategoryApi(jsonwebtoken)
        dispatch({
            type: ACTION_GET_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_GET_PRODUCT_CATEGORY_FAILURE,
            payload: err,
            error: true
        })
    }
}