import { iAuth } from '~interface/iAuth'

export const ACTION_LOGIN_START = 'FETCH_LOGIN_START'
export const ACTION_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const ACTION_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE'
export const ACTION_LOGOUT_START = 'FETCH_LOGOUT_START'
export const ACTION_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS'
export const ACTION_LOGOUT_FAILURE = 'FETCH_LOGOUT_FAILURE'
export const ACTION_REGISTER_START = 'FETCH_REGISTER_START'
export const ACTION_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS'
export const ACTION_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE'

export interface LoginAction {
    type: typeof ACTION_LOGIN_SUCCESS
    payload: iAuth
}

export interface LogoutAction {
    type: typeof ACTION_LOGOUT_SUCCESS
    payload: iAuth
}

export interface RegisterAction {
    type: typeof ACTION_REGISTER_SUCCESS
    payload: iAuth
}