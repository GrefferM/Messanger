import L from 'lodash'

import iRootState from '~interface/iRootState'

export const getAuth = (state: iRootState):any => L.toPairs(state.Auth)
export const getBaseCategory = (state: iRootState):any => L.toPairs(state.BaseCategory)
export const getProductCategory = (state: iRootState):any => L.toPairs(state.ProductCategory)
export const getProps = (state: iRootState):any => L.toPairs(state.Props)