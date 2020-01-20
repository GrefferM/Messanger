import { iAuth, iUser } from '~interface/iAuth'
import { iBaseCategory, iProductCategory } from '~interface/iCategory'
import iProps from '~interface/iProps'
type Auth = iAuth & iUser
export default interface iRootState {
    Auth: Auth
    ProductCategory: iProductCategory
    BaseCategory: iBaseCategory
    Props: iProps
}