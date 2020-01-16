export interface iAuth {
    isAuth: boolean
    success: boolean
    message: string
    jwt: string
}
export interface iUser {
    id: string
    isAdmin: boolean
    name: string
    email: string
    password: string
}