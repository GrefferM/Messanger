import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { iAuth, iUser } from '~interface/iAuth'
import { actionLogout } from '~action/actionsAuth'
import { getAuth } from '~selectors'

import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    auth: getAuth(state)
})

const mapDispatch = {
    actionLogout
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Menu: React.FC<Props> = (props: Props) => {

    const { isAuth, jwt } = L.fromPairs(props.auth) as unknown as iAuth

    function handlerLogout() {
        sessionStorage.clear()
        props.actionLogout(jwt)
    }

    return (
        <Nav className={`navbar navbar-expand-lg ${classes.menu}`}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item active`}>
                            <Link className={classes.nav_link} to="/">Home</Link>
                        </li>
                        <li className={`nav-item active`}>
                            <Link className={classes.nav_link} to="/">Контакты</Link>
                        </li>
                        <li className={`nav-item active`}>
                            <Link className={classes.nav_link} to="/">Информация о компании</Link>
                        </li>
                        <li className={`nav-item active`}>
                            <Link className={classes.nav_link} to="/">Сервисы</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav mr-auto">
                        {!isAuth && <li className={`nav-item d-flex align-items-center`}>
                            <span className='text-light mr-2'>Здраствуйте,</span>
                            <Link className={classes.login} to="/login">Войти в личний кабинет</Link>
                        </li>}
                        {isAuth && <li className={`nav-item`}>
                            <Link className={classes.nav_link} to="/logout" onClick={handlerLogout}>Logout</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </Nav>
    )
}

export default connector(Menu)