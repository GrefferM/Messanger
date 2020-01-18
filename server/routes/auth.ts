import { Router } from 'express'

import { login, register, logout } from '~controller/auth'

const router = Router()

router.post('/login', login)
router.get('/logout', logout)
router.post('/register', register)

export default router