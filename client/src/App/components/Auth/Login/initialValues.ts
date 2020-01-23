import * as Yup from 'yup'
import iField from '~interface/iField'
import { iFormLoginProps } from '~interface/iForm'

export const initialValues: iFormLoginProps = {
    email: '',
    password: ''
}

export const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Enter email'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter password')
})

export const Field = [
    { name: 'email', type: 'text' },
    { name: 'password', type: 'password' },
] as unknown as iField[]