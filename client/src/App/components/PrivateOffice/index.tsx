import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faEnvelope,
    faUsers,
    faMoneyBillWave,
    faCogs,
    faInfoCircle,
    faUserShield
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import classes from './index.module.scss'

interface Menu {
    value: string
    icon: IconDefinition
    to: string
}

interface Props {
    children?: React.ReactNode
}

const PrivateOffice: React.FC<Props> = (props: Props) => {

    const menu: Menu[] = [
        {
            value: 'Ваш профиль',
            icon: faUser,
            to: 'profile'
        },
        {
            value: 'Сообщения',
            icon: faEnvelope,
            to: 'message'
        },
        {
            value: 'Группы',
            icon: faUsers,
            to: 'groups'
        },
        {
            value: 'Покупки',
            icon: faMoneyBillWave,
            to: 'buy'
        },
        {
            value: 'Настройки',
            icon: faCogs,
            to: 'settings'
        },
        {
            value: 'Помощь',
            icon: faInfoCircle,
            to: 'info'
        },
        {
            value: 'Панель администратора',
            icon: faUserShield,
            to: 'admin'
        }
    ]

    function renderNavItem(menu: Menu, key: number) {
        return (
            <Nav.Item key={key} className={classes.nav_item}>
                <Nav.Link className={classes.nav_link} href={`/privateOffice/${menu.to}`}>
                    <FontAwesomeIcon icon={menu.icon} className={classes.icon} />
                    <div className={classes.value}>{menu.value}</div>
                </Nav.Link>
            </Nav.Item>
        )
    }

    return (
        <Row className={'mx-0 vh-100'}>
            <Col sm={3} className={classes.menu}>
                <Nav className="flex-column">
                    {menu.map((value, key) => renderNavItem(value, key))}
                </Nav>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
    )
}

export default PrivateOffice