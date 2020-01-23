import * as Yup from 'yup'
import { iProduct } from '~interface/iProduct'
import iField from '~interface/iField'

export const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The field is offensive to input'),
    baseCategoryId: Yup.string()
        .required('Choose which main category you want to add the product to.'),
    price: Yup.number()
        .required('Enter product price'),
    discount: Yup.number(),
    productCode: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter product productCode'),
})

export const Field = [
    { name: 'img', type: 'file' },
    { name: 'name', type: 'text' },
    { name: 'baseCategoryId', type: 'select' },
    { name: 'price', type: 'number' },
    { name: 'discount', type: 'number' },
    { name: 'productCode', type: 'text' },
] as unknown as iField[]

export const initialValues: iProduct = {
    img: '',
    name: '',
    baseCategoryId: '',
    price: 0,
    discount: 0,
    productCode: 0,
    shortDescription: [''],
    description: '',
    options: { key: '', value: '' }
}