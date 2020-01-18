export interface iUser {
    id: string
    isAdmin: boolean
    isAuth: boolean
    name: string
    email: string
    password: string
}

export class Auth implements iUser {
    public id: string = ''
    public name: string = ''
    public email: string = ''
    public password: string = ''
    public isAdmin: boolean = false
    public isAuth: boolean = false

    candidate(params: iUser) {
        this.id = params.id
        this.name = params.name
        this.email = params.email
        this.password = params.password
        this.isAdmin = params.isAdmin
        this.isAuth = true
    }
}