import request from 'superagent'

import { iProduct } from '~interface/iProduct'

export const apiAddProduct = async (value: iProduct, jsonwebtoken: string): Promise<iProduct> => {   
    const { body } = await request
        .post(`/api/product/add`)
        .set({ Authorization: jsonwebtoken })
        .send(value)

    return new Promise(resolve => {
        resolve(body)
    })
}