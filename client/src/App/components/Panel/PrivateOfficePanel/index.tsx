import React from 'react'

import Panel from '~component/Panel'
import Menu from './menu'

interface iProps {
    children?: React.ReactNode
}

const PrivateOffice: React.FC<iProps> = (props: iProps) => {

    return (
        <Panel menu={Menu} optional={'privateoffice/'}>
            {props.children}
        </Panel>
    )
}

export default PrivateOffice