import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import L from 'lodash'

import iRootState from '~interface/iRootState'
import { iUser } from '~interface/iAuth'
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
    autorization: boolean
    redirect: string
}

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps

const PrivateRoute: React.FC<Props> = (props: Props) => {

    const { isAuth } = L.fromPairs(props.auth) as unknown as iUser

    function handlerIsAuth(): React.ReactNode {
        if (props.autorization) {
            return isAuth ? props.children : <Redirect to={props.redirect} />
        } else {
            return !isAuth ? props.children : <Redirect to={props.redirect} />
        }
    }


    return (
        <>
            { handlerIsAuth() }
        </>
    )
}

export default connector(PrivateRoute)