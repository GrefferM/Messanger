import React from 'react'

import Form from './loginForm'
import classes from './index.module.scss'

const Login: React.FC = () => {  
    return (
        <div className={classes.auth}>
            <Form />
        </div>
    )
}

export default Login