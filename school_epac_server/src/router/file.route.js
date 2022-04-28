const Router = require("koa-router")

const fileRouter = new Router({ prefix: "/file" })

const { 
  verifySync
} = require("../middleware/user.middleware")

const {
  xlsxHandle
} = require('../middleware/file.middleware')

const {
  upload
} = require("../controller/file.controller")

const {
  setXlsxData
} = require("../controller/user.controller")

// 上传文件添加用户
fileRouter.post('/upload', verifySync, xlsxHandle, upload, setXlsxData)

module.exports = fileRouter