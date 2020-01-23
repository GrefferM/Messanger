import { Request, Response } from 'express'
import { model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import L from 'lodash'

import { Props } from '~interface/iProps'
import { Auth, iUser } from '~interface/iUser'
import keys from '~config/keys'

const User = model('User')

export const login = async (req: Request, res: Response) => {
    try {
        const candidate = await User.findOne({ email: req.body.email }) as unknown as iUser
        const isPasswords = await bcrypt.compare(req.body.password, candidate.password)
        if (isPasswords) {
            const user = L.merge(new Auth(), new Props(true, "login user"))
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
            res.json(L.merge(new Auth(), new Props(false, "Not a correct password or login entry try again")))
        }
    } catch (err) {
        res.json(L.merge(new Auth(), new Props(false, "User not found")))
    }
}
export const logout = (req: Request, res: Response) => {
    try {
        // @ts-ignore
        req.session.destroy(err => {
            if (L.isUndefined(err)) {
                res.json(L.merge(new Auth(), new Props(true, "logout user")))
            } else {
                res.json(L.merge(new Auth(), new Props(false, `error: ${err}`)))
            }
        })
    } catch (err) {
        res.json(L.merge(new Auth(), new Props(false, `error: ${err}`)))
    }
}
export const register = async (req: Request, res: Response) => {
    try {
        const candidate = await User.findOne({
            email: req.body.email
        })

        if (L.isNull(candidate)) {
            const salt = await bcrypt.genSalt(10)

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, salt),
                isAdmin: false
            })
            user.save()

            res.json(L.merge(new Auth(), new Props(true, "registered user")))
        } else {
            res.json(L.merge(new Auth(), new Props(false, "user with such email is already registered")))
        }
    } catch (err) {
        res.json(L.merge(new Auth(), new Props(false, `error: ${err}`)))
    }
}