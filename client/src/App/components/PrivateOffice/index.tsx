import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Row, Col, Nav } from 'react-bootstrap'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { iUser } from '~interface/iAuth'
import { getAuth } from '~selectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { iMenu, Menu } from './menu'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    auth: getAuth(state)
})

const mapDispatch = {}

const connector = connect(
    mapState,
    mapDispatch
)

interface iProps {
    children?: React.ReactNode
}

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps

const PrivateOffice: React.FC<Props> = (props: Props) => {

    const { isAdmin } = L.fromPairs(props.auth) as unknown as iUser

    function renderNavItem(menu: iMenu, key: number, admin: boolean) {
        return (
            menu.isAdmin === admin || !menu.isAdmin ?
            <Nav.Item key={key} className={classes.nav_item}>
                <Nav.Link className={classes.nav_link} href={`/privateOffice/${menu.to}`}>
                    <FontAwesomeIcon icon={menu.icon} className={classes.icon} />
                    <div className={classes.value}>{menu.value}</div>
                </Nav.Link>
            </Nav.Item> : ''
        )
    }

    return (
        <Row className={'mx-0 h-100'}>
            <Col sm={3} className={classes.menu}>
                <Nav className="flex-column">
                    {Menu.map((value, key) => renderNavItem(value, key, isAdmin))}
                </Nav>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
    )
}

export default connector(PrivateOffice)