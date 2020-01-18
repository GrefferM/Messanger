import React from 'react'
import { Form, Button } from 'react-bootstrap'

import classes from './index.module.scss'

const AddProduct: React.FC = () => {
    return (
        <div>
            <p className={classes.title}>Добавить продукт</p>
            <hr className='my-2' />
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Имя продукта</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formCategory">
                    <Form.Label>Имя категорий</Form.Label>
                    <Form.Control type="text" placeholder="Enter category" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextareaDescriptions">
                    <Form.Label>Описание товара</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct