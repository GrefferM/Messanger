import { iAuth, iUser } from '~interface/iAuth'
import { 
    iCategoryBase, 
    iCategoryProduct 
} from '~interface/iCategory'
import iProps from '~interface/iProps'
type Auth = iAuth & iUser
export default interface iRootState {
    Auth: Auth
    ProductCategory: iCategoryProduct
    BaseCategory: iCategoryBase
    Props: iProps
}