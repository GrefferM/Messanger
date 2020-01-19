import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
    FormikProps,
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'
import * as Yup from 'yup'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import iCategory from '~interface/iCategory'
import { iUser } from '~interface/iAuth'
import {
    actionAddBaseCategory,
    actionGetBaseCategory
} from '~action/actionCategory'
import {
    getAuth,
    getCategory,
} from '~selectors'

import { Table } from 'react-bootstrap'
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
    category: getCategory(state),
})
const mapDispatch = {
    actionAddBaseCategory,
    actionGetBaseCategory
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const AddBaseCategory: React.FC<Props> = (props: Props) => {
    const initialValues: iCategory = {
        name: '',
        icon: ''
    }
    const { jwt } = L.fromPairs(props.auth) as unknown as iUser
    const category = L.fromPairs(props.category) as unknown as iCategory[]

    useEffect(() => {
        props.actionGetBaseCategory(jwt)
    }, [category.length])

    return (
        <div>
            <p className={classes.title}>Добавить основную категорию</p>
            <hr className='my-2' />
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikBag) => {
                    props.actionAddBaseCategory(values, jwt)
                    setTimeout(() => {
                        props.actionGetBaseCategory(jwt)
                        formikBag.setSubmitting(false)
                    }, 2000);
                }}
                validationSchema={Schema}
                render={(formikBag: FormikProps<iCategory>) => (<Form>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iCategory>) => (<>
                            <input name="name" type="text" className={`form-control ${form.errors.name && 'is-invalid'}`} placeholder="Enter name" onChange={field.onChange} />
                            {form.touched.name && form.errors.name && <div className="invalid-feedback">{form.errors.name}</div>}
                        </>)} />
                    </div>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iCategory>) => (<>
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
            {getTableCategory(category)}
        </div>
    )
}

function getTableCategory(category: iCategory[]) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            {L.map(category, (values, index) => getRow(values, ++index))}
        </tbody>
    </Table>
}
function getRow(category: iCategory, number: number, ): JSX.Element {
    return (
        <tr key={number}>
            <td>{number}</td>
            <td>{category.name}</td>
            <td>{category.icon}</td>
        </tr>
    )
}

export default connector(AddBaseCategory)