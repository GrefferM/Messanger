import { Router } from 'express'
import passport from 'passport'

import { 
    addProduct
} from '~controller/product'

const router = Router()

router.post('/add', passport.authenticate('jwt', { session: false }), addProduct)

export default router