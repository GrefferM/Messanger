import React from 'react'

import Menu from '~component/Menu'

const Layout: React.FC = (props) => {
    return (
        <>
            <Menu />
            { props.children }
        </>
    )
}

export default Layout