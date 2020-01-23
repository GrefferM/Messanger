import { Request, Response } from 'express'
import { model } from 'mongoose'
import L from 'lodash'

import { Props } from '~interface/iProps'

import '~models/CategoryBase'
import '~models/CategoryProduct'
const BaseCategory = model('CategoryBase')
const ProductCategory = model('CategoryProduct')

export const addCategoryBase = async (req: Request, res: Response) => {
    try {
        const candidate = await BaseCategory.findOne({
            name: req.body.name
        })

        if (L.isNull(candidate)) {
            const category = new BaseCategory({
                name: req.body.name,
                icon: req.body.icon
            })

            category.save()

            res.json(new Props(true, "add base category"))
        } else {
            res.json(new Props(false, "this category is already present in the database"))
        }
    } catch (err) {
        res.json(new Props(false, `error: ${err}`))
    }
}
export const getCategoryBase = async (req: Request, res: Response) => {
    try {
        const category = await BaseCategory.find()
        res.json(L.merge(category, new Props(true, "return list category")))
    } catch (err) {
        res.json(new Props(false, `error: ${err}`))
    }
}
export const addCategoryProduct = async (req: Request, res: Response) => {
    try {
        const candidate = await ProductCategory.findOne({
            name: req.body.name
        })

        if (L.isNull(candidate)) {
            const candidate = await BaseCategory.findOne({
                name: req.body.baseCategory
            })
            if (!L.isNull(candidate)) {
                const { id } = candidate
                const category = new ProductCategory({
                    name: req.body.name,
                    baseCategoryId: id
                })

                category.save()

                res.json(new Props(true, "add product category"))
            } else {
                res.json(new Props(false, "this product category is in the database"))
            }
        } else {
            res.json(new Props(false, "no basic category in the database"))
        }
    } catch (err) {
        res.json(new Props(false, `error: ${err}`))
    }
}
export const getCategoryProduct = async (req: Request, res: Response) => {
    try {
        const category = await ProductCategory.find()
        res.json(L.merge(category, new Props(true, "return list category")))
    } catch (err) {
        res.json(new Props(false, `error: ${err}`))
    }
}