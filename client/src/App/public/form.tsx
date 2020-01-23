import React from 'react'
import {
    FormikProps,
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'
import { Table } from 'react-bootstrap'
import L from 'lodash'
import iField from '~interface/iField'
import {
    iCategoryProduct,
    iCategoryBase
} from '~interface/iCategory'

// initialValues - parameter differentiation
// Schema        - validation scheme
// field         - iField type array
// callback      - unspecified parameter, action after submit
// props         - unspecified parameter, callback options 
// jwt           - unspecified parameter, shipping token 
// select        - unspecified parameter, if necessary, draw a selection field
export function getForm(initialValues: any, Schema: any, field: iField[], callback?: Function, props?: any, jwt?: string, select?: any[]) {
    return <Formik initialValues={initialValues} onSubmit={(values, formikBag) => {
        console.log(values)
        if (!L.isUndefined(callback)) {
            formikBag.setSubmitting(callback(props, values, jwt))
        }
    }} validationSchema={Schema} render={(formikBag: FormikProps<typeof initialValues>) => (<Form>
        {L.map(field, (value, index) => {
            //console.log(formikBag.errors)
            if (value.type === 'text' || value.type === 'password') {
                return getFieldInput(index, value.name, value.type)
            }
            else if (value.type === 'number') {
                return getFieldInputNumber(index, value.name, value.type)
            }
            else if (value.type === 'file') {
                return getFieldInputFile(index, value.name)
            }
            else if (value.type === 'select') {
                return getFieldSelect(index, value.name, !L.isUndefined(select) ? select : [])
            }
        })}
        <button type="submit" className="btn btn-primary" disabled={formikBag.isSubmitting}>Добавить</button>
    </Form>)}>
    </Formik>
}
// initialValues - parameter differentiation
// Schema        - validation scheme
// field         - iField type array
// bottomControl - unspecified parameter, html bottom controls
// callback      - unspecified parameter, action after submit
// props         - unspecified parameter, callback options 
// jwt           - unspecified parameter, shipping token 
export function getFormAuth(initialValues: any, Schema: any, field: iField[], bottomControl?: any, callback?: Function, props?: any, jwt?: string) {
    return <Formik initialValues={initialValues} onSubmit={(values, formikBag) => {
        console.log(values)
        if (!L.isUndefined(callback)) {
            formikBag.setSubmitting(callback(props, values, jwt))
        }
    }} validationSchema={Schema} render={(formikBag: FormikProps<typeof initialValues>) => (<Form>
        {L.map(field, (value, index) => {
            if (value.type === 'text' || value.type === 'number' || value.type === 'password') {
                return getFieldInput(index, value.name, value.type)
            }
        })}
        {bottomControl(formikBag.isSubmitting)}
    </Form>)}>
    </Formik>
}
export function getFieldSelect(key: number, nameField: string, select: any[]) {
    return <div key={key} className="form-group">
        <Field render={({ field, form }: FieldProps) => (<>
            {
                // @ts-ignore
                <select name={nameField} className="form-control"
                    onFocus={event => {
                        form.setFieldValue(nameField, event.target.value)
                    }}
                    onChange={field.onChange}>
                    {L.map(select, (value, index) => getOptions(value.name, ++index))}
                </select>
            }
            {
                // @ts-ignore
                form.touched[nameField] && form.errors[nameField] && <div className="invalid-feedback">{form.errors[nameField]}</div>
            }
        </>)} />
    </div>
}
export function getOptions(name: string, number: number): JSX.Element {
    return (
        <option key={number}>{name}</option>
    )
}
export function getFieldInput(key: number, nameField: string, type: string) {
    return <div key={key} className="form-group">
        <Field render={({ field, form }: FieldProps) => (<>
            {
                // @ts-ignore
                <input name={nameField} type={type} className={`form-control ${form.errors[nameField] && 'is-invalid'}`} placeholder={`Enter ${nameField}`} onChange={field.onChange} />
            }
            {
                // @ts-ignore
                form.touched[nameField] && form.errors[nameField] && <div className="invalid-feedback">{form.errors[nameField]}</div>
            }
        </>)} />
    </div>
}
export function getFieldInputNumber(key: number, nameField: string, type: string) {
    return <div key={key} className="form-group">
        <Field render={({ field, form }: FieldProps) => (<>
            {
                // @ts-ignore
                <input name={nameField} step="any" type={type} className={`form-control ${form.errors[nameField] && 'is-invalid'}`} placeholder={`Enter ${nameField}`} onChange={field.onChange} />
            }
            {
                // @ts-ignore
                form.touched[nameField] && form.errors[nameField] && <div className="invalid-feedback">{form.errors[nameField]}</div>
            }
        </>)} />
    </div>
}
export function getFieldInputFile(key: number, nameField: string) {
    return <div key={key} className="form-group">
        <Field render={({ form }: FieldProps) => (<>
            {
                // @ts-ignore
                <input name="img" type="file" className={`form-control-file ${form.errors.img && 'is-invalid'}`} placeholder={`Enter ${nameField}`} onChange={getFile(form)} />
            }
            {
                // @ts-ignore
                form.touched[nameField] && form.errors[nameField] && <div className="invalid-feedback">{form.errors[nameField]}</div>
            }
        </>)} />
    </div>
}
export function getFile(form: any): ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined {
    return event => {
        try {
            // @ts-ignore
            const file = event.target.files[0]
            if (!L.isUndefined(file)) {
                form.setFieldValue('img', file)
                previewFile(file)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export function previewFile(file: File) {
    var preview = document.getElementById('img')
    var reader = new FileReader()

    reader.onloadend = function () {
        // @ts-ignore
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        // @ts-ignore
        preview.src = "";
    }
}
export function getTableProductCategory(category: iCategoryProduct[]) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>BaseCategory</th>
            </tr>
        </thead>
        <tbody>
            {L.map(category, (values, index) => getRowProduct(values, ++index))}
        </tbody>
    </Table>
}
export function getRowProduct(category: iCategoryProduct, number: number, ): JSX.Element {
    return (
        <tr key={number}>
            <td>{number}</td>
            <td>{category.name}</td>
            <td>{category.baseCategory}</td>
        </tr>
    )
}
export function getTableBaseCategory(category: iCategoryBase[]) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            {L.map(category, (values, index) => getRowBase(values, ++index))}
        </tbody>
    </Table>
}
export function getRowBase(category: iCategoryBase, number: number, ): JSX.Element {
    return (
        <tr key={number}>
            <td>{number}</td>
            <td>{category.name}</td>
            <td>{category.icon}</td>
        </tr>
    )
}