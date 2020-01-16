import { iAuth, iUser } from '~interface/iAuth'

export default interface iRootState {
    Auth: iAuth & iUser
}