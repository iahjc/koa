import svgCaptcha from 'svg-captcha'

class PublicController {
    constructor() {}
    async getCaptcha(ctx) {
        // console.log(1)
        // const newCaptca = svgCaptcha.create({})
        // console.log(newCaptca)
        // ctx.body = {
        //     msg: newCaptca.data
        // }
        ctx.body = {
            msg: 'body message'
        }
    }
}

export default new PublicController()