import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { iAuth } from '~interface/iAuth'
import { actionLogout } from '~action/actionsAuth'
import { getAuth } from '~selectors'

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

    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Messanger</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {!isAuth && <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>}
                    {isAuth && <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={props.actionLogout.bind(event, jwt)}>Logout</Link>
                    </li>}
                </ul>
            </div>
        </Nav>
    )
}

export default connector(Menu)