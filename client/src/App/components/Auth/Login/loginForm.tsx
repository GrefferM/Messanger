import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
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
import { iAuth } from '~interface/iAuth'
import { actionLogin } from '~action/actionsAuth'
import { getAuth } from '~selectors'
import classes from './loginForm.module.scss'

export interface iFormLoginProps {
    email: string
    password: string
}

const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('The field is offensive to input'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input')
})

const mapState = (state: iRootState) => ({
    auth: getAuth(state)
})

const mapDispatch = {
    actionLogin
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const loginForm: React.FC<Props> = (props: Props) => {
    const initialValues: iFormLoginProps = {
        email: '',
        password: ''
    }

    const { message, success } = L.fromPairs(props.auth) as unknown as iAuth
    
    return (
        <div>
            <p className={'h1 text-center'}>Login</p>
            <p className={'text-danger mb-1'}>{!success && message}</p>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikBag) => {
                    props.actionLogin(values)
                    setTimeout(() => formikBag.setSubmitting(false), 2000)
                }}
                validationSchema={Schema}
                render={(formikBag: FormikProps<iFormLoginProps>) => (<Form>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iFormLoginProps>) => (<>
                            <input name="email" type="email" className={`form-control ${form.errors.email && 'is-invalid'}`} aria-describedby="emailHelp" placeholder="Enter email" onChange={field.onChange} />
                            {form.touched.email && form.errors.email && <div className="invalid-feedback">{form.errors.email}</div>}
                        </>)} />
                    </div>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iFormLoginProps>) => (<>
                            <input name="password" type="password" className={`form-control ${form.errors.password && 'is-invalid'}`} aria-describedby="passwordHelp" placeholder="Enter password" onChange={field.onChange} />
                            {form.touched.password && form.errors.password && <div className="invalid-feedback">{form.errors.password}</div>}
                        </>)} />
                    </div>
                    <div className={`${classes.links} mb-3`}>
                        <Link to='/forgotPassword'>Забыл пароль</Link>
                        <Link to='/register'>Зарегестрироваться</Link>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={formikBag.isSubmitting}>Войти</button>
                </Form>)}>
            </Formik>
        </div>
    )
}

export default connector(loginForm)