import Router from 'koa-router'
import publicController from '../api/PublicController'

const router = new Router()

router.get('/getCaptcha', publicController.getCaptcha)

router.get('/api', async (ctx, next) => {
    ctx.body = "body 2"
})

export default router