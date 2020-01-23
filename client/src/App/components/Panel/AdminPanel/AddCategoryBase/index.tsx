import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { FormikHelpers } from 'formik'
import L from 'lodash'

import { getForm, getTableBaseCategory } from '~public/form'
import { Schema, Field, initialValues } from './initialValues'
import { iCategoryBase } from '~interface/iCategory'
import iRootState from '~interface/iRootState'
import { iUser } from '~interface/iAuth'
import {
    actionAddCategoryBase,
    actionGetCategoryBase
} from '~action/actionCategory'
import {
    getAuth,
    getBaseCategory,
} from '~selectors'
import classes from './index.module.scss'


const mapState = (state: iRootState) => ({
    auth: getAuth(state),
    category: getBaseCategory(state),
})
const mapDispatch = {
    actionAddBaseCategory: actionAddCategoryBase,
    actionGetBaseCategory: actionGetCategoryBase
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function submit(props: Props, values: iCategoryBase, jwt: string): boolean {
    props.actionAddBaseCategory(values, jwt)
    setTimeout(() => {
        props.actionGetBaseCategory(jwt)
    }, 500)
    return false
}

const AddCategoryBase: React.FC<Props> = (props: Props) => {

    const { jwt } = L.fromPairs(props.auth) as unknown as iUser
    const category = L.fromPairs(props.category) as unknown as iCategoryBase[]

    useEffect(() => {
        props.actionGetBaseCategory(jwt)
    }, [category.length])

    return (
        <>
            <p className={classes.title}>Добавить основную категорию</p>
            <hr className='my-2' />
            {
                // The function draws the form table by the set parameters
                getForm(initialValues, Schema, Field, submit, props, jwt)
            }
            <div className='my-4' />
            <p className={classes.title}>Список основных категорий</p>
            <hr className='my-2' />
            {
                // The function draws a table of base categories
                getTableBaseCategory(category)
            }
        </>
    )
}

export default connector(AddCategoryBase)