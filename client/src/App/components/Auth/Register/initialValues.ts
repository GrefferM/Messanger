import * as Yup from 'yup'
import iField from '~interface/iField'
import { iFormRegisterProps } from '~interface/iForm'

export const initialValues: iFormRegisterProps = {
    name: '',
    email: '',
    password: ''
}

export const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter name'),
    email: Yup.string()
        .email('Invalid email')
        .required('Enter email'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter password')
})

export const Field = [
    { name: 'name', type: 'text' },
    { name: 'email', type: 'text' },
    { name: 'password', type: 'password' }
] as unknown as iField[]