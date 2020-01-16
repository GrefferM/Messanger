import L from 'lodash'

import iRootState from '~interface/iRootState'

export const getAuth = (state: iRootState):any => L.toPairs(state.Auth)