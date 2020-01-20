import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
    FormikProps,
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'
import { Table } from 'react-bootstrap'
import * as Yup from 'yup'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { 
    iBaseCategory, 
    iProductCategory 
} from '~interface/iCategory'
import { iUser } from '~interface/iAuth'
import {
    actionGetProductCategory,
    actionGetBaseCategory,
    actionAddProductCategory
} from '~action/actionCategory'
import {
    getAuth,
    getBaseCategory,
    getProductCategory
} from '~selectors'

import classes from './index.module.scss'

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input'),
    icon: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input')
})

const mapState = (state: iRootState) => ({
    auth: getAuth(state),
    baseCategory: getBaseCategory(state),
    productCategory: getProductCategory(state)
})
const mapDispatch = {
    actionGetProductCategory,
    actionGetBaseCategory,
    actionAddProductCategory
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const AddProductCategory: React.FC<Props> = (props: Props) => {
    const initialValues: iProductCategory = {
        name: '',
        baseCategory: 0,
        icon: ''
    }
    const { jwt } = L.fromPairs(props.auth) as unknown as iUser
    const baseCategory = L.fromPairs(props.baseCategory) as unknown as iBaseCategory[]
    const productCategory = L.fromPairs(props.productCategory) as unknown as iProductCategory[]

    useEffect(() => {
        props.actionGetProductCategory(jwt)
        props.actionGetBaseCategory(jwt)
    }, [baseCategory.length, productCategory.length])

    return (
        <div>
            <p className={classes.title}>Добавить категорию продукта</p>
            <hr className='my-2' />
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikBag) => {
                    props.actionAddProductCategory(values, jwt)
                    setTimeout(() => {
                        props.actionGetProductCategory(jwt)
                        formikBag.setSubmitting(false)
                    }, 2000);
                }}
                validationSchema={Schema}
                render={(formikBag: FormikProps<iProductCategory>) => (<Form>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iProductCategory>) => (<>
                            <input name="name" type="text" className={`form-control ${form.errors.name && 'is-invalid'}`} placeholder="Enter name" onChange={field.onChange} />
                            {form.touched.name && form.errors.name && <div className="invalid-feedback">{form.errors.name}</div>}
                        </>)} />
                    </div>
                    <div className="form-group">
                        <Field render={({field}: FieldProps<iProductCategory>) => (
                            <select name="baseCategory" className="form-control" onChange={field.onChange}>
                                {L.map(baseCategory, (value, index) => getOptions(value.name, ++index))}
                            </select>)} />
                    </div>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iProductCategory>) => (<>
                            <input name="icon" type="text" className={`form-control ${form.errors.icon && 'is-invalid'}`} placeholder="Enter icon" onChange={field.onChange} />
                            {form.touched.icon && form.errors.icon && <div className="invalid-feedback">{form.errors.icon}</div>}
                        </>)} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={formikBag.isSubmitting}>Добавить</button>
                </Form>)}>
            </Formik>
            <div className='my-4' />
            <p className={classes.title}>Список основных категорий</p>
            <hr className='my-2' />
            {getTableCategory(productCategory)}
        </div>
    )
}
function getOptions(name: string, number: number, ): JSX.Element {
    return (
        <option key={number}>{name}</option>
    )
}
function getTableCategory(category: iProductCategory[]) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>BaseCategory</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            {L.map(category, (values, index) => getRow(values, ++index))}
        </tbody>
    </Table>
}
function getRow(category: iProductCategory, number: number, ): JSX.Element {
    return (
        <tr key={number}>
            <td>{number}</td>
            <td>{category.name}</td>
            <td>{category.baseCategory}</td>
            <td>{category.icon}</td>
        </tr>
    )
}
export default connector(AddProductCategory)