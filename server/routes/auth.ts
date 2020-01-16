import { Router } from 'express'

import { login, register, logout } from '~controller/auth'
import passport from 'passport'

const router = Router()

router.post('/login', login)
router.get('/logout', passport.authenticate('jwt', { session: false }), logout)
router.post('/register', register)

export default router