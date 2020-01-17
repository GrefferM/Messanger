import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRouter from '~component/PrivateRouter'
import AdminRouter from '~component/AdminRouter'

import Layout from '~container/Layout'
import Login from '~component/Login'
import Register from '~component/Register'
import ForgotPassword from '~component/ForgotPassword'
import PrivateOffice from '~component/PrivateOffice'

export default (
    <Switch>
        <Route path='/' component={Layout} exact />
        <Route path='/login'>
            <Layout>
                <PrivateRouter autorization={false} redirect='/privateOffice'>
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
        <Route path='/privateOffice'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/profile'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/message'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/groups'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/buy'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/settings'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/info'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOffice />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateOffice/admin'>
            <Layout>
                <AdminRouter redirect='/'>
                    <PrivateOffice />
                </AdminRouter>
            </Layout>
        </Route>
    </Switch>
)