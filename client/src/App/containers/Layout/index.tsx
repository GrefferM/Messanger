import React from 'react'
import { Container } from 'react-bootstrap'

import Menu from '~component/Menu'

const Layout: React.FC = (props) => {
    return (
        <Container
            fluid={true}
            className={'p-0'}
        >
            <Menu />
            {props.children}
        </Container>
    )
}

export default Layout