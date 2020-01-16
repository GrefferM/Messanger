import React from 'react'

import Form from './registerForm'
import classes from './index.module.scss'

const Register: React.FC = () => {
    return (
        <div className={classes.register}>
            <Form />
        </div>
    )
}

export default Register