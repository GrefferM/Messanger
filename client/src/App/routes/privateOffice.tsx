import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRouter from '~component/Router/PrivateRouter'

import Layout from '~container/Layout'
import PrivateOfficePanel from '~component/Panel/PrivateOfficePanel'

const RouterPrivateOffice = (
    <Switch>
        <Route path='/privateoffice' exact>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateoffice/profile'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateoffice/message'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateoffice/groups'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateoffice/buy'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateoffice/settings'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
        <Route path='/privateoffice/info'>
            <Layout>
                <PrivateRouter autorization={true} redirect='/login'>
                    <PrivateOfficePanel />
                </PrivateRouter>
            </Layout>
        </Route>
    </Switch>
)

export default RouterPrivateOffice