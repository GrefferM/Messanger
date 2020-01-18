import { iAuth } from '~interface/iAuth'

export const ACTION_LOGIN_START = 'ACTION_LOGIN_START'
export const ACTION_LOGIN_SUCCESS = 'ACTION_LOGIN_SUCCESS'
export const ACTION_LOGIN_FAILURE = 'ACTION_LOGIN_FAILURE'
export const ACTION_LOGOUT_START = 'ACTION_LOGOUT_START'
export const ACTION_LOGOUT_SUCCESS = 'ACTION_LOGOUT_SUCCESS'
export const ACTION_LOGOUT_FAILURE = 'ACTION_LOGOUT_FAILURE'
export const ACTION_REGISTER_START = 'ACTION_REGISTER_START'
export const ACTION_REGISTER_SUCCESS = 'ACTION_REGISTER_SUCCESS'
export const ACTION_REGISTER_FAILURE = 'ACTION_REGISTER_FAILURE'

export interface iLoginAction {
    type: typeof ACTION_LOGIN_SUCCESS
    payload: iAuth
}

export interface iLogoutAction {
    type: typeof ACTION_LOGOUT_SUCCESS
    payload: iAuth
}

export interface iRegisterAction {
    type: typeof ACTION_REGISTER_SUCCESS
    payload: iAuth
}