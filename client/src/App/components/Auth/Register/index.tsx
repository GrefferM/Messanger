import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import L from 'lodash'

import { getFormAuth } from '~public/form'
import { Schema, Field, initialValues } from './initialValues'
import { iFormRegisterProps } from '~interface/iForm'
import iRootState from '~interface/iRootState'
import { iAuth } from '~interface/iAuth'
import { actionRegister } from '~action/actionsAuth'
import { getAuth } from '~selectors'

import classes from './index.module.scss'

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

function submit(props: Props, values: iFormRegisterProps): boolean {
    props.actionRegister(values)
    setTimeout(() => { }, 500)
    return false
}

const Register: React.FC<Props> = (props: Props) => {
    const { message, success } = L.fromPairs(props.auth) as unknown as iAuth

    const bottomControl = (isSubmitting: boolean) => (
        <>
            <div className={`${classes.links} mb-3`}>
                <Link to='/forgotPassword'>Забыл пароль</Link>
                <Link to='/login'>Войти</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Зарегестрироваться</button>
        </>)

    return (
        <div className={`my-2 ${classes.register}`}>
            <p className={'h1 text-center'}>Register</p>
            <p className={'text-danger mb-1'}>{!success && message}</p>
            {
                // The function draws the form table by the set parameters
                getFormAuth(initialValues, Schema, Field, bottomControl, submit, props)
            }
        </div>
    )
}

export default connector(Register)