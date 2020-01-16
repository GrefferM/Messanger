import { PassportStatic } from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { model } from 'mongoose'

import keys from '~config/keys'
import '~models/user'

const User = model('user')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT
}

export default function (passport: PassportStatic) {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.id).select('name email password')

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (err) {
                console.log(err)
            }
        })
    )
}