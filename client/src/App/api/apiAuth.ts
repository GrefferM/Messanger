import request from 'superagent'
import jwt from 'jsonwebtoken'
import L from 'lodash'

import { iAuth } from '~interface/iAuth'
import { iFormLoginProps } from '~component/Login/loginForm'
import { iFormRegisterProps } from '~component/Register/registerForm'
import keys from '~config/keys'

export const fetchLogin = async (value: iFormLoginProps): Promise<iAuth> => {
    const { body } = await request
        .post(`/api/auth/login`)
        .send(value)

    const token = L.replace(L.toString(body), 'Bearer ', '')
    const verify = jwt.verify(token, keys.JWT) as unknown as iAuth

    sessionStorage.setItem('lgn', token)
    return new Promise(resolve => {
        resolve(L.merge(verify, { jwt: body }))
    })
}
export const fetchLogout = async (jsonwebtoken: string): Promise<iAuth> => {
    const { body } = await request
        .get('/api/auth/logout')
        .set({ Authorization: jsonwebtoken })
        
    sessionStorage.clear()
    return new Promise(resolve => {
        resolve(body)
    })
}
export const fetchRegister = async (value: iFormRegisterProps): Promise<iAuth> => {
    const { body } = await request
        .post('/api/auth/register')
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}