const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')

const app = new Koa()
const router = new Router()

// 添加访问前缀
router.prefix('/api')


router.get('/', ctx => {
    ctx.body = "hello world"
})

router.get('/api', ctx => {
    ctx.body = "hello api"
})



router.get('/async', async (ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(function() {
            resolve('hello world 2s later!!!')
        }, 2000)
    })
    ctx.body = result
})

// app.use(async ctx => {
//     ctx.body = "hello world"
// })

router.post('/post', async (ctx) => {
    let { body } = ctx.request
    console.log(body)
    console.log(ctx.request)
    ctx.body = {
        ...body
    }
})

app.use(koaBody)
app.use(cors)
app.use(json({ pretty: false, param: 'pretty' }))

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)