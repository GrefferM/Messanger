import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { iAuth, iUser } from '~interface/iAuth'
import { actionLogout } from '~action/actionsAuth'
import { getAuth } from '~selectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'

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

    const { isAuth, isAdmin, name, jwt } = L.fromPairs(props.auth) as unknown as iAuth & iUser
    const [toggler, setToggler] = useState(classes.toggler_icon)

    function handlerIsClose() {
        if (L.split(toggler, ' ').length === 1) {
            setToggler(`${classes.toggler_icon} ${classes.active}`)
        } else {
            setToggler(classes.toggler_icon)
        }
    }

    return (
        <Nav className={`navbar navbar-expand-lg ${classes.menu}`}>
            <button className={`d-block d-lg-none ${classes.toggler_button}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handlerIsClose}
            >
                <span className={toggler}></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className={`nav-item active`}>
                        <Link className={classes.nav_link} to="/">Home</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={classes.nav_link} to="/">Контакты</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={classes.nav_link} to="/">Информация о компании</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={classes.nav_link} to="/">Сервисы</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    {!isAuth && <li className={`nav-item d-flex align-items-center`}>
                        <Link className={classes.login} to="/login">
                            Войти
                        </Link>
                    </li>}
                    {!isAuth && <li className={`nav-item d-flex align-items-center`}>
                        <Link className={classes.login} to="/register">
                            Зарегестрироваться
                        </Link>
                    </li>}
                    {isAuth && <li className={`nav-item d-flex align-items-center`}>
                        <span className='text-light d-none d-lg-block'>Здраствуйте, {name} </span>
                        <Link className={classes.login} to="/privateoffice">
                            <FontAwesomeIcon icon={faUser} className={'mx-1'} />
                            Личний кабинет
                        </Link>
                    </li>}
                    {isAdmin && <li className={`nav-item d-flex align-items-center`}>
                        <Link className={classes.login} to="/admin">
                            <FontAwesomeIcon icon={faUserShield} className={'mx-1'} />
                            Панель администратора
                        </Link>
                    </li>}
                    {isAuth && <li className={`nav-item`}>
                        <Link className={classes.logout} to="/logout" onClick={props.actionLogout.bind(event, jwt)}>Выйти</Link>
                    </li>}
                </ul>
            </div>
        </Nav>
    )
}

export default connector(Menu)