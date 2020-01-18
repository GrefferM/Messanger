import * as R from 'ramda'
import jwt from 'jsonwebtoken'
import L from 'lodash'

import { iAuth } from '~interface/iAuth'
import keys from '~config/keys'

import {
    ACTION_LOGIN_SUCCESS,
    ACTION_REGISTER_SUCCESS,
    ACTION_LOGOUT_SUCCESS,
    iLoginAction,
    iRegisterAction,
    iLogoutAction
} from '~actionType/auth'

const initialSession = () => {
    try {
        const token = sessionStorage.getItem('lgn')
        if (!L.isNull(token)) {
            const verify = jwt.verify(token, keys.JWT) as unknown as iAuth
            return L.merge(verify, { jwt: `Bearer ${token}` })
        }
        return {}
    } catch (err) {
        return { err }
    }
}

const initialState = initialSession()

export default (state = initialState, action: iLoginAction & iLogoutAction & iRegisterAction) => {
    switch (action.type) {
        case ACTION_LOGIN_SUCCESS:
            return R.merge(state, action.payload)
        case ACTION_LOGOUT_SUCCESS:
            return R.merge(state, action.payload)
        case ACTION_REGISTER_SUCCESS:
            return R.merge(state, action.payload)
        default:
            return state
    }
}