import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { iAuth, iUser } from '~interface/iAuth'
import { getAuth } from '~selectors'

const mapState = (state: iRootState) => ({
    auth: getAuth(state)
})
const mapDispatch = {}

const connector = connect(
    mapState,
    mapDispatch
)

interface iProps {
    children: React.ReactNode
    redirect: string
}

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps

const PrivateRoute: React.FC<Props> = (props: Props) => {

    const { isAuth, isAdmin } = L.fromPairs(props.auth) as unknown as iAuth & iUser

    function handlerIsAuth(): React.ReactNode {
        if (isAuth && isAdmin) {
            return props.children
        } else {
            return <Redirect to={props.redirect} />
        }
    }


    return (
        <>
            { handlerIsAuth() }
        </>
    )
}

export default connector(PrivateRoute)