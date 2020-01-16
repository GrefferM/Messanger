export interface iAuth {
    isAuth: boolean
    success: boolean
    message: string
    jwt: string
}
export interface iUser {
    id: string
    name: string
    email: string
    password: string
}