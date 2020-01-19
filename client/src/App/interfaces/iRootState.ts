import { iAuth, iUser } from '~interface/iAuth'
import iCategory from '~interface/iCategory'
import iProps from '~interface/iProps'
type Auth = iAuth & iUser
export default interface iRootState {
    Auth: Auth
    Category: iCategory
    Props: iProps
}