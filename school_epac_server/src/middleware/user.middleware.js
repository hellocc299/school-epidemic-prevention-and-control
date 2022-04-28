const jwt = require("jsonwebtoken")
const {PUBLIC_KEY} = require("../app/config")
const errorType = require("../contants/error-type")
const userService = require("../services/user.services")
const md5password = require("../utils/password-handle")

// 判断登录逻辑(是否输入，验证密码...)
const verifyLogin = async(ctx, next) => {
  console.log("登录验证");
  const { username, password, type } = ctx.request.body
  if(!username || !password || !type) {
    const error = new Error(errorType.NAME_OR_PASSWORD_OR_TYPE_IS_NOT_EXIST)
    return ctx.app.emit('error', error, ctx)
  }
  const result = await userService.getUserByNameAndType(username, type)
  const user = result[0]
  if(!user) {
    const error = new Error(errorType.USER_IS_NOT_EXIST)
    return ctx.app.emit('error', error, ctx)
  }
  if(md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_WRONG)
    return ctx.app.emit('error', error, ctx)
  }
  console.log(user);
  ctx.user = user
  await next()
}

// 根据token解析信息
const verifySync = async (ctx, next) => {
  console.log("验证授权");
  const authorization = ctx.headers.authorization
  if(!authorization) {
    const error = new Error(errorType.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  } 
  const token = authorization.replace('Bearer ', '')
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    })
    ctx.user = result
    await next()
  } catch(err) {
    console.log(err);
    const error = new Error(errorType.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifySync
}