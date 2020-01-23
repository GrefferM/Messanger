import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import L from 'lodash'

import { getForm, getTableProductCategory } from '~public/form'
import { Schema, Field, initialValues } from './initialValues'
import iRootState from '~interface/iRootState'
import { iCategoryProduct } from '~interface/iCategory'
import { iProduct } from '~interface/iProduct'
import { iUser } from '~interface/iAuth'
import { actionGetCategoryProduct } from '~action/actionCategory'
import { actionAddProduct } from '~action/actionProduct'
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
    actionAddProduct
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function submit(props: Props, values: iProduct, jwt: string): boolean {
    props.actionAddProduct(values, jwt)
    setTimeout(() => {
        props.actionGetProductCategory(jwt)
    }, 500)
    return false
}

const MainSpecifications: React.FC<Props> = (props: Props) => {
    const { jwt } = L.fromPairs(props.auth) as unknown as iUser
    const category = L.fromPairs(props.productCategory) as unknown as iCategoryProduct[]

    useEffect(() => {
        props.actionGetProductCategory(jwt)
    }, [category.length])

    return (
        <>
            <img src="#" id='img' alt="" />
            {
                // The function draws the form table by the set parameters
                getForm(initialValues, Schema, Field, submit, props, jwt, category)
            }
            <div className='my-4' />
            <p className={classes.title}>Список основных категорий</p>
            <hr className='my-2' />
            {
                // The function draws a table of product categories
                getTableProductCategory(category)
            }
        </>
    )
}

export default connector(MainSpecifications)