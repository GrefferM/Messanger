import request from 'superagent'

import {
    iCategoryBase,
    iCategoryProduct
} from '~interface/iCategory'

export const apiAddCategoryBase = async (value: iCategoryBase, jsonwebtoken: string): Promise<iCategoryBase> => {
    const { body } = await request
        .post(`/api/category/base/add`)
        .set({ Authorization: jsonwebtoken })
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiGetCategoryBase = async (jsonwebtoken: string): Promise<iCategoryBase> => {
    const { body } = await request
        .get(`/api/category/base/get`)
        .set({ Authorization: jsonwebtoken })

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiAddCategoryProduct = async (value: iCategoryProduct, jsonwebtoken: string): Promise<iCategoryProduct> => {
    const { body } = await request
        .post(`/api/category/product/add`)
        .set({ Authorization: jsonwebtoken })
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}

export const apiGetCategoryProduct = async (jsonwebtoken: string): Promise<iCategoryProduct> => {
    const { body } = await request
        .get(`/api/category/product/get`)
        .set({ Authorization: jsonwebtoken })

    return new Promise(resolve => {
        resolve(body)
    })
}