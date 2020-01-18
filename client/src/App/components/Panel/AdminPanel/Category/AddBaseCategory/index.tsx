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
import { getAuth } from '~selectors'
import classes from './index.module.scss'

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input'),
    icon: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input')
})

const mapState = (state: iRootState) => ({
    auth: getAuth(state)
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

    useEffect(() => {
        props.actionGetBaseCategory(jwt)
    }, [1])

    return (
        <div>
            <p className={classes.title}>Добавить основную категорию</p>
            <hr className='my-2' />
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    props.actionAddBaseCategory(values, jwt)
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
        </div>
    )
}

export default connector(AddBaseCategory)