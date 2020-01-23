import { Request, Response } from 'express'
import { model } from 'mongoose'

import '~models/Product'
import '~models/CategoryProduct'
const Product = model('Product')
const ProductCategory = model('CategoryProduct')

export const addProduct = async (req: Request, res: Response) => {
    res.json('true')
}