import svgCaptcha from 'svg-captcha'

class PublicController {
    constructor() {}
    async getCaptcha(ctx) {
        const newCaptca = svgCaptcha.create({})
        ctx.body = {
            msg: newCaptca.data
        }
    }
}

export default new PublicController()