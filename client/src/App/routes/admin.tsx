import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminRouter from '~component/Router/AdminRouter'

import Layout from '~container/Layout'
import AdminPanel from '~component/Panel/AdminPanel'
import AddProduct from '~component/Panel/AdminPanel/Product/AddProduct'

import AddBaseCategory from '~component/Panel/AdminPanel/Category/AddBaseCategory'
import AddProductCategory from '~component/Panel/AdminPanel/Category/AddProductCategory'

const RouterAdmin = (
    <Switch>
        <Route path='/admin' exact>
            <Layout>
                <AdminRouter redirect='/login'>
                    <AdminPanel />
                </AdminRouter>
            </Layout>
        </Route>
        <Route path='/admin/addproduct'>
            <Layout>
                <AdminRouter redirect='/login'>
                    <AdminPanel>
                        <AddProduct />
                    </AdminPanel>
                </AdminRouter>
            </Layout>
        </Route>
        <Route path='/admin/addbasecategory'>
            <Layout>
                <AdminRouter redirect='/login'>
                    <AdminPanel>
                        <AddBaseCategory />
                    </AdminPanel>
                </AdminRouter>
            </Layout>
        </Route>
        <Route path='/admin/addproductcategory'>
            <Layout>
                <AdminRouter redirect='/login'>
                    <AdminPanel>
                        <AddProductCategory />
                    </AdminPanel>
                </AdminRouter>
            </Layout>
        </Route>
    </Switch>
)

export default RouterAdmin