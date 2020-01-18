import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRouter from '~component/Router/PrivateRouter'

import Layout from '~container/Layout'

import Login from '~component/Auth/Login'
import Register from '~component/Auth/Register'
import ForgotPassword from '~component/Auth/ForgotPassword'

import Admin from '~routes/admin'
import PrivateOffice from '~routes/privateOffice'

export default (
    <>
        <Switch>
            <Route path='/' component={Layout} exact />
            <Route path='/login'>
                <Layout>
                    <PrivateRouter autorization={false} redirect='/'>
                        <Login />
                    </PrivateRouter>
                </Layout>
            </Route>
            <Route path='/logout'>
                <Redirect to='/' />
            </Route>
            <Route path='/register'>
                <Layout>
                    <PrivateRouter autorization={false} redirect='/'>
                        <Register />
                    </PrivateRouter>
                </Layout>
            </Route>
            <Route path='/forgotPassword'>
                <Layout>
                    <PrivateRouter autorization={false} redirect='/'>
                        <ForgotPassword />
                    </PrivateRouter>
                </Layout>
            </Route>
        </Switch>
        {Admin}
        {PrivateOffice}
    </>
)