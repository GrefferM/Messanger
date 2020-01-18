export interface iAuth {
    success: boolean
    message: string
}
export interface iUser {
    id: string
    isAdmin: boolean
    name: string
    email: string
    password: string
    isAuth: boolean
    jwt: string
}