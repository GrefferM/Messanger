import React from 'react'

import Panel from '~component/Panel'
import Menu from './menu'

interface iProps {
    children?: React.ReactNode
}

const AdminPanel: React.FC<iProps> = (props: iProps) => {

    return (
        <Panel menu={Menu} optional={'admin/'}>
            { props.children }
        </Panel>
    )
}

export default AdminPanel