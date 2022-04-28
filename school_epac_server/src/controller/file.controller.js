const fs = require("fs")
const xlsx = require('node-xlsx')
const redisUtils = require('../utils/redis-utils')
const fileService = require("../services/file.service")
const userService = require("../services/user.services")
const { AVATAR_PATH, XSLX_UPLOAD_PATH } = require("../contants/file-path")
const errorType = require("../contants/error-type")
const {sendStatusHandle} = require("../utils/status_error_handle")
const {
  APP_HOST,
  APP_PORT
} = require("../app/config")

class FileController {
   // 上传用户头像
  async upAvatar(ctx, next) {
    console.log("上传用户头像url");
    const { filename, mimetype, size } = ctx.req.file
    const { u_id } = ctx.user
    // 先获取下用户头像，有的话更新，没有的话插入
    const avatarInfo = await fileService.getAvatarByUserId(u_id)
    let result
    if(avatarInfo) {
      result = await fileService.updateAvatar(filename, mimetype, size, u_id)
      const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${u_id}/avatar`
      result += await userService.setAvatarUrl(avatarUrl, u_id)
    } else {
      result = await fileService.setAvatar(filename, mimetype, size, u_id)
      const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${u_id}/avatar`
      result += await userService.setAvatarUrl(avatarUrl, u_id)
    }
    sendStatusHandle(result, ctx)
  }
  // 获取用户头像
  async avatorInfo(ctx, next) {
    console.log("获取用户头像");
    const { userId } = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
  // 上传文件(这里使用redis保存)
  async upload(ctx, next) {
    try {
      // 获取上传文件
      const file = ctx.req.file
      let fileTypeError = false
      let fileContent = ''
      let fileName = ''
      let filext = file.originalname.substring(file.originalname.lastIndexOf("."),file.originalname.length)
      // let filext = file.name.substring(file.name.lastIndexOf("."),file.originalname.length)
        if (filext != '.xlsx') {
          redisUtils.set('xlsxData', 'err', 3600)
          fs.unlinkSync(file.path)
          fileTypeError = true
          const error = new Error(errorType.FILE_FORMAT_UPLOAD_ERROR)
          return ctx.app.emit('error', error, ctx)
        } else {
          fileName = XSLX_UPLOAD_PATH + '/' + file.filename
          fileContent = xlsx.parse(fileName) 
          redisUtils.set("xlsxData", JSON.stringify(fileContent), 3600)
          fileTypeError = false
          await next()
        }
    } catch(err) {
       console.log(err);
       const error = new Error(errorType.NETWORK_ERROR)
       return ctx.app.emit('error', error, ctx)
    }
  }
}
module.exports = new FileController()