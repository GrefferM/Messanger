import React from 'react'
import { Link } from 'react-router-dom'
import classes from './index.module.scss'

interface iProps {
    children?: React.ReactNode
}

const AddProduct: React.FC<iProps> = (props: iProps) => {
    return (
        <>
            <p className={classes.title}>Добавить категорию продукта</p>
            <hr className='my-2' />
            <div className='d-flex'>
                <Link className='d-block mx-2' to="/admin/addproduct">Main Specifications</Link>
                <Link className='d-block mx-2' to="/admin/addproduct/features">Features</Link>
            </div>
            <hr className='my-2' />
            {props.children}
        </>
    )
}

export default AddProduct