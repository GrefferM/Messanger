import { Router } from 'express'
import passport from 'passport'

import { 
    addBaseCategory, 
    getBaseCategory,
    addProductCategory,
    getProductCategory
} from '~controller/category'

const router = Router()

router.post('/base/add', passport.authenticate('jwt', { session: false }), addBaseCategory)
router.get('/base/get', passport.authenticate('jwt', { session: false }), getBaseCategory)
router.post('/product/add', passport.authenticate('jwt', { session: false }), addProductCategory)
router.get('/product/get', passport.authenticate('jwt', { session: false }), getProductCategory)

export default router