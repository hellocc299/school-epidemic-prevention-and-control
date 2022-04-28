const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const errorHandle = require("./error-handle")
const useRoutes = require("../router")

const app = new Koa()
app.use(bodyParser())
useRoutes(app)

app.on('error', errorHandle)

module.exports = app