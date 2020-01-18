import { Request, Response } from 'express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import L from 'lodash'

import keys from '~config/keys'

import '~models/user'
const User = model('user')

interface iUser {
    id: string
    isAdmin: boolean
    name: string
    email: string
    password: string
}
interface iAuth {
    isAuth: boolean
    success: boolean
    message: string
}
export class Auth implements iAuth, iUser {
    constructor(
        public isAuth: boolean,
        public success: boolean,
        public message: string) { }

    public id: string = ''
    public name: string = ''
    public email: string = ''
    public password: string = ''
    public isAdmin: boolean = false

    candidate(params: iUser) {
        this.id = params.id
        this.name = params.name
        this.email = params.email
        this.password = params.password
        this.isAdmin = params.isAdmin
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const candidate = await User.findOne({ email: req.body.email }) as unknown as iUser
        const isPasswords = await bcrypt.compare(req.body.password, candidate.password)
        if (isPasswords) {
            const user = new Auth(true, true, "login user")
            user.candidate(candidate)
            const token = jwt.sign(
                L.toPlainObject(
                    user
                ),
                keys.JWT,
                { expiresIn: 60 * 60 }
            )
            // @ts-ignore
            req.session.isAuthenticated = true
            // @ts-ignore
            req.session.user = candidate
            
            res.json(`Bearer ${token}`)
        } else {
            res.json(new Auth(false, false, "Not a correct password or login entry try again"))
        }
    } catch (err) {
        res.json(new Auth(false, false, "User not found"))
    }
}
export const logout = (req: Request, res: Response) => {
    try {
        // @ts-ignore
        req.session.destroy(err => {
            if (L.isUndefined(err)) {
                res.json(new Auth(false, true, "logout user"))
            } else {
                res.json(new Auth(false, false, `error: ${err}`))
            }
        })
    } catch (err) {
        res.json(new Auth(false, false, `error: ${err}`))
    }
}
export const register = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if (L.isNull(user)) {
            const salt = await bcrypt.genSalt(10)
            const password = req.body.password

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(password, salt),
                isAdmin: false
            })
            user.save()

            res.json(new Auth(false, true, "registered user"))
        } else {
            res.json(new Auth(false, false, "user with such email is already registered"))
        }
    } catch (err) {
        res.json(new Auth(false, false, `error: ${err}`))
    }
}