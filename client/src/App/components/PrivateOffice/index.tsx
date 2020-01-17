import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.scss'

const PrivateOffice: React.FC = () => {

    const menu: string[] = ['Ваш профиль', 'Ваши покупки', 'Настройки', 'Помощь', 'Панель администратора']

    function renderNavItem(value: string, key:number) {
        return (
            <Nav.Item key={key} className={classes.nav_item}>
                <Nav.Link className={classes.nav_link}>
                    <FontAwesomeIcon icon={faUser} className='mr-2' />
                    {value}
                </Nav.Link>
            </Nav.Item>
        )
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col md={3} className={`p-0 ${classes.menu}`}>
                    <Nav className="flex-column">
                        {menu.map((value, key) => renderNavItem(value, key))}
                    </Nav>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}

export default PrivateOffice