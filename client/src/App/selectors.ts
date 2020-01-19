import L from 'lodash'

import iRootState from '~interface/iRootState'

export const getAuth = (state: iRootState):any => L.toPairs(state.Auth)
export const getCategory = (state: iRootState):any => L.toPairs(state.Category)
export const getProps = (state: iRootState):any => L.toPairs(state.Props)