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
import { actionRegister } from '~action/actionsAuth'
import { getAuth } from '~selectors'
import classes from './registerForm.module.scss'

export interface iFormRegisterProps {
    name: string
    email: string
    password: string
}

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input'),
    email: Yup.string()
        .email('Invalid email')
        .required('The field is offensive to input'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input')
})

const mapState = (state: iRootState) => ({
    auth: getAuth(state),
})

const mapDispatch = {
    actionRegister
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const registerForm: React.FC<Props> = (props: Props) => {
    const initialValues: iFormRegisterProps = {
        name: '',
        email: '',
        password: ''
    }

    const { message, success } = L.fromPairs(props.auth) as unknown as iAuth

    return (
        <div>
            <p className={'h1 text-center'}>Register</p>
            <p className={'text-danger mb-1'}>{!success && message}</p>
            <Formik
                initialValues={initialValues}

                onSubmit={(values) => {
                    props.actionRegister(values)
                }}
                validationSchema={Schema}
                render={(formikBag: FormikProps<iFormRegisterProps>) => (<Form>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iFormRegisterProps>) => (<>
                            <input name="name" type="text" className={`form-control ${form.errors.name && 'is-invalid'}`} aria-describedby="nameHelp" placeholder="Enter name" onChange={field.onChange} />
                            {form.touched.name && form.errors.name && <div className="invalid-feedback">{form.errors.name}</div>}
                        </>)} />
                    </div>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iFormRegisterProps>) => (<>
                            <input name="email" type="email" className={`form-control ${form.errors.email && 'is-invalid'}`} aria-describedby="emailHelp" placeholder="Enter email" onChange={field.onChange} />
                            {form.touched.email && form.errors.email && <div className="invalid-feedback">{form.errors.email}</div>}
                        </>)} />
                    </div>
                    <div className="form-group">
                        <Field render={({ field, form }: FieldProps<iFormRegisterProps>) => (<>
                            <input name="password" type="password" className={`form-control ${form.errors.password && 'is-invalid'}`} aria-describedby="passwordHelp" placeholder="Enter password" onChange={field.onChange} />
                            {form.touched.password && form.errors.password && <div className="invalid-feedback">{form.errors.password}</div>}
                        </>)} />
                    </div>
                    <div className={`${classes.links} mb-3`}>
                        <Link to='/forgotPassword'>Забыл пароль</Link>
                        <Link to='/login'>Войти</Link>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={success && formikBag.isSubmitting}>Войти</button>
                </Form>)}>
            </Formik>
        </div>
    )
}

export default connector(registerForm)