import React from 'react'

import Form from './registerForm'
import classes from './index.module.scss'

const Register: React.FC = () => {
    return (
        <div className={`my-2 ${classes.register}`}>
            <Form />
        </div>
    )
}

export default Register