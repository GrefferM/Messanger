import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import L from 'lodash'

import { getForm, getTableProductCategory } from '~public/form'
import { Schema, Field, initialValues } from './initialValues'
import iRootState from '~interface/iRootState'
import { iCategoryBase, iCategoryProduct } from '~interface/iCategory'
import { iUser } from '~interface/iAuth'
import {
    actionGetCategoryProduct,
    actionGetCategoryBase,
    actionAddCategoryProduct
} from '~action/actionCategory'
import {
    getAuth,
    getBaseCategory,
    getProductCategory
} from '~selectors'

import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    auth: getAuth(state),
    baseCategory: getBaseCategory(state),
    productCategory: getProductCategory(state)
})
const mapDispatch = {
    actionGetProductCategory: actionGetCategoryProduct,
    actionGetBaseCategory: actionGetCategoryBase,
    actionAddProductCategory: actionAddCategoryProduct
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function submit(props: Props, values: iCategoryProduct, jwt: string): boolean {
    props.actionAddProductCategory(values, jwt)
    setTimeout(() => {
        props.actionGetProductCategory(jwt)
    }, 500)
    return false
}

const AddCategoryProduct: React.FC<Props> = (props: Props) => {

    const { jwt } = L.fromPairs(props.auth) as unknown as iUser
    const baseCategory = L.fromPairs(props.baseCategory) as unknown as iCategoryBase[]
    const productCategory = L.fromPairs(props.productCategory) as unknown as iCategoryProduct[]

    useEffect(() => {
        props.actionGetProductCategory(jwt)
        props.actionGetBaseCategory(jwt)
    }, [baseCategory.length, productCategory.length])

    return (
        <div>
            <p className={classes.title}>Добавить категорию продукта</p>
            <hr className='my-2' />
            {
                // The function draws the form table by the set parameters
                getForm(initialValues, Schema, Field, submit, props, jwt, baseCategory)
            }
            <div className='my-4' />
            <p className={classes.title}>Список категорий продукта</p>
            <hr className='my-2' />
            {
                // The function draws a table of product categories
                getTableProductCategory(productCategory)
            }
        </div>
    )
}

export default connector(AddCategoryProduct)