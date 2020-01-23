import * as Yup from 'yup'
import { iCategoryBase } from '~interface/iCategory'
import iField from '~interface/iField'

export const Schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter category name'),
    icon: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter category icon')
})

export const Field = [
    { name: 'name', type: 'text' },
    { name: 'icon', type: 'text' }
] as unknown as iField[]

export const initialValues: iCategoryBase = {
    name: '',
    icon: ''
}