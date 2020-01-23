import * as Yup from 'yup'
import { iCategoryProduct } from '~interface/iCategory'
import iField from '~interface/iField'

export const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter category name'),
    baseCategory: Yup.string()
        .required('Choose which main category you want to add the product category to.'),
})

export const Field = [
    { name: 'name', type: 'text' },
    { name: 'baseCategory', type: 'select' }
] as unknown as iField[]

export const initialValues: iCategoryProduct = {
    name: '',
    baseCategory: ''
}