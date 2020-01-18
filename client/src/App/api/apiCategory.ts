import request from 'superagent'

import iCategory from '~interface/iCategory'

export const apiAddBaseCategory = async (value:iCategory, jsonwebtoken: string): Promise<iCategory>=> {
    const { body } = await request
        .post(`/api/category/base/add`)
        .set({ Authorization: jsonwebtoken })
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiGetBaseCategory = async (jsonwebtoken: string): Promise<iCategory>=> {
    const { body } = await request
        .get(`/api/category/base/get`)
        .set({ Authorization: jsonwebtoken })

    return new Promise(resolve => {
        resolve(body)
    })
}