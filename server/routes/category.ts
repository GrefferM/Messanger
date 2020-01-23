import { Router } from 'express'
import passport from 'passport'

import { 
    addCategoryBase, 
    getCategoryBase,
    addCategoryProduct,
    getCategoryProduct
} from '~controller/category'

const router = Router()

router.post('/base/add', passport.authenticate('jwt', { session: false }), addCategoryBase)
router.get('/base/get', passport.authenticate('jwt', { session: false }), getCategoryBase)
router.post('/product/add', passport.authenticate('jwt', { session: false }), addCategoryProduct)
router.get('/product/get', passport.authenticate('jwt', { session: false }), getCategoryProduct)

export default router