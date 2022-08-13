const combineRoutes = require('koa-combine-routers')
const demoRouter = require('./aRouter')

module.exports = combineRoutes(
    demoRouter
)










