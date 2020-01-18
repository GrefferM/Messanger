import React from 'react'
import { Container } from 'react-bootstrap'

import Menu from '~component/Menu'

const Layout: React.FC = (props) => {
    return (
        <Container
            fluid={true}
            className={'p-0 vh-100 d-flex flex-column justify-content-between'}
        >
            <Menu />
            <div className={'h-100'}>
                {props.children}
            </div>
        </Container>
    )
}

export default Layout