const Router = require("koa-router")

const commonRouter = new Router({prefix: '/common'})

const {
  verifySync
} = require("../middleware/user.middleware")

const {
  setHealth,
  getSelfInfo
} = require("../controller/common.controller")

// 健康填报表
commonRouter.post('/sethealth', verifySync, setHealth)
// 获取个人信息
commonRouter.get('/getselfinfo', verifySync, getSelfInfo)

module.exports = commonRouter