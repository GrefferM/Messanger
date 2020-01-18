import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import iMenu from '~interface/iMenu'
import classes from './index.module.scss'

interface iProps {
    menu: iMenu[]
    optional?: string
}

const SideBar: React.FC<iProps> = (props: iProps) => {

    function renderNavItem(menu: iMenu, key: number) {
        return (
            <Nav.Item key={key} className={classes.nav_item}>
                <Link className={classes.nav_link} to={`/${props.optional? props.optional : ''}${menu.to}`}>
                    <FontAwesomeIcon icon={menu.icon} className={classes.icon} />
                    <div className={classes.value}>{menu.value}</div>
                </Link>
            </Nav.Item>
        )
    }

    return (
        <Nav className="flex-column">
            {props.menu.map((value, key) => renderNavItem(value, key))}
        </Nav>
    )
}

export default SideBar