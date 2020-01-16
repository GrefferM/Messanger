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
    fetchLogin as fetchLoginApi,
    fetchRegister as fetchRegisterApi,
    fetchLogout as fetchLogoutApi
} from '~api/apiAuth'
import { iFormLoginProps } from '~component/Login/loginForm'
import { iFormRegisterProps } from '~component/Register/registerForm'

export const actionLogin = (value: iFormLoginProps) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOGIN_START })

    try {
        const data = await fetchLoginApi(value)
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
export const actionLogout = (jsonwebtoken:string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOGOUT_START })

    try {
        const data = await fetchLogoutApi(jsonwebtoken)
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
        const data = await fetchRegisterApi(value)
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