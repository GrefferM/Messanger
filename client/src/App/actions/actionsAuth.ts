import { Dispatch } from 'redux'

import {
    ACTION_LOGIN_START,
    ACTION_LOGIN_SUCCESS,
    ACTION_LOGIN_FAILURE,

    ACTION_LOGOUT_START,
    ACTION_LOGOUT_SUCCESS,
    ACTION_LOGOUT_FAILURE,

    ACTION_REGISTER_START,
    ACTION_REGISTER_SUCCESS,
    ACTION_REGISTER_FAILURE
} from '~actionType/auth'
import {
    apiLogin as apiLoginApi,
    apiRegister as apiRegisterApi,
    apiLogout as apiLogoutApi
} from '~api/apiAuth'
import { 
    iFormLoginProps, 
    iFormRegisterProps 
} from '~interface/iForm'

export const actionLogin = (value: iFormLoginProps) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOGIN_START })

    try {
        const data = await apiLoginApi(value)
        dispatch({
            type: ACTION_LOGIN_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_LOGIN_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionLogout = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOGOUT_START })

    try {
        const data = await apiLogoutApi()
        dispatch({
            type: ACTION_LOGOUT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_LOGOUT_FAILURE,
            payload: err,
            error: true
        })
    }
}
export const actionRegister = (value: iFormRegisterProps) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_REGISTER_START })

    try {
        const data = await apiRegisterApi(value)
        dispatch({
            type: ACTION_REGISTER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_REGISTER_FAILURE,
            payload: err,
            error: true
        })
    }
}