import request from 'superagent'
import jwt from 'jsonwebtoken'
import L from 'lodash'

import { iAuth } from '~interface/iAuth'
import { iFormLoginProps } from '~component/Auth/Login/loginForm'
import { iFormRegisterProps } from '~component/Auth/Register/registerForm'
import keys from '~config/keys'

export const apiLogin = async (value: iFormLoginProps): Promise<iAuth> => {
    const { body } = await request
        .post(`/api/auth/login`)
        .send(value)

    try {
        const token = L.replace(L.toString(body), 'Bearer ', '')
        const verify = jwt.verify(token, keys.JWT) as unknown as iAuth

        sessionStorage.setItem('lgn', token)
        return new Promise(resolve => {
            resolve(L.merge(verify, { jwt: body }))
        })
    } catch (err) {
        return new Promise(resolve => {
            resolve(body)
        })
    }
}
export const apiLogout = async (): Promise<iAuth> => {
    const { body } = await request
        .get('/api/auth/logout')

    sessionStorage.clear()
    return new Promise(resolve => {
        resolve(body)
    })
}
export const apiRegister = async (value: iFormRegisterProps): Promise<iAuth> => {
    const { body } = await request
        .post('/api/auth/register')
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}