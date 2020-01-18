import { Router } from 'express'
import passport from 'passport'

import { addBaseCategory } from '~controller/category'
import { getBaseCategory } from '~controller/category'

const router = Router()

router.post('/base/add', passport.authenticate('jwt', { session: false }), addBaseCategory)
router.get('/base/get', passport.authenticate('jwt', { session: false }), getBaseCategory)

export default router