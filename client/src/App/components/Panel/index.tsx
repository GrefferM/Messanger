import React from 'react'
import { Row, Col } from 'react-bootstrap'

import SideBar from '~component/SideBar'
import iMenu from '~interface/iMenu'

import classes from './index.module.scss'

interface iProps {
    children?: React.ReactNode
    optional?: string
    menu: iMenu[]
}

const Panel: React.FC<iProps> = (props: iProps) => {

    return (
        <Row className={'mx-0 h-100'}>
            <Col sm={3} className={classes.menu}>
                <SideBar menu={props.menu} optional={props.optional}/>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
    )
}

export default Panel