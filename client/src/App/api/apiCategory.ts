import request from 'superagent'

import {
    iBaseCategory,
    iProductCategory
} from '~interface/iCategory'

export const apiAddBaseCategory = async (value: iBaseCategory, jsonwebtoken: string): Promise<iBaseCategory> => {
    const { body } = await request
        .post(`/api/category/base/add`)
        .set({ Authorization: jsonwebtoken })
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiGetBaseCategory = async (jsonwebtoken: string): Promise<iBaseCategory> => {
    const { body } = await request
        .get(`/api/category/base/get`)
        .set({ Authorization: jsonwebtoken })

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiAddProductCategory = async (value: iBaseCategory, jsonwebtoken: string): Promise<iProductCategory> => {
    const { body } = await request
        .post(`/api/category/product/add`)
        .set({ Authorization: jsonwebtoken })
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiGetProductCategory = async (jsonwebtoken: string): Promise<iBaseCategory> => {
    const { body } = await request
        .get(`/api/category/product/get`)
        .set({ Authorization: jsonwebtoken })

    return new Promise(resolve => {
        resolve(body)
    })
}