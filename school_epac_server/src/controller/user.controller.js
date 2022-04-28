const jwt = require("jsonwebtoken")
const errorType = require("../contants/error-type")
const {PRIVATE_KEY} = require("../app/config")
const md5password = require("../utils/password-handle")
const userService = require("../services/user.services")
const redisUtils = require("../utils/redis-utils")
const {sendStatusHandle, queryStatusHandle} = require("../utils/status_error_handle")
const unPermission = require("../utils/unpermission")

class UserController {
  // 完成校验后颁发token
  async login(ctx, next) {
    console.log("颁发token");
    const loginData = ctx.user
    const { u_id, u_number, username, password, avatar, type, classes, address, createtime, modifytime, sex } = loginData
    const token = jwt.sign({ u_id, u_number, username, password, avatar, type, classes, address, createtime, modifytime, sex }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
      algorithm: "RS256"
  })
    if(token) {
      const queryData = { loginData, token }
      ctx.status = 200
      queryStatusHandle(queryData, ctx)
    } else {
      const error = new Error(errorType.SEND_ERROR)
      return ctx.app.emit('error', error, ctx)
    }
  }
  // 修改密码
  async upPwd(ctx, next) {
    console.log("更新密码");
    const { u_id, password } = ctx.user
    const { oldPwd, newPwd } = ctx.request.body
    if(md5password(oldPwd) !== password) {
      const error = new Error(errorType.PASSWORD_IS_WRONG)
      return ctx.app.emit('error', error, ctx)
    }
    const patrn = /^([a-zA-Z0-9]|[._]){6,15}$/
    if(!patrn.exec(newPwd)) {
      const error = new Error(errorType.PASSWORD_IS_NONSTANDARD)
      return ctx.app.emit('error', error, ctx)
    }
    const newPassword = md5password(newPwd)
    const result = await userService.editPwd(u_id, newPassword)
    sendStatusHandle(result, ctx)
  }
  // 添加用户(xlsx文件)
  async setXlsxData(ctx, next) {
    console.log("通过xlsx文件添加用户");
    let allUserInfo = await userService.getAllUserInfo()
    let xlsxData = await redisUtils.get("xlsxData")  
    if(xlsxData === 'err') {
      const error = new Error(errorType.FILE_FORMAT_IMPORT_ERROR)
      return ctx.app.emit('error', error, ctx)
    }
    xlsxData = JSON.parse(xlsxData)[0].data
    let inFlag = true
    let inXlsxArr = []
    let flag = false
    if (xlsxData[0].length != 8) {
      const error = new Error(errorType.TABLE_DATA_FORMAT_ERROR)
      return ctx.app.emit('error', error, ctx)
    }
    // 判断除了邮箱有没有为空的
    for(let i = 1; i < xlsxData.length; i++) {
      for(let j = 0; j < xlsxData[i].length - 1; j++) {
        if(xlsxData[i][j] === null) {
          inFlag = false
          const error = new Error(errorType.TABLE_DATA_FORMAT_ERROR)
          return ctx.app.emit('error', error, ctx)
        } 
      }
    }

    for(let i = 1; i < xlsxData.length; i++) {
      let xlsxObj = {}
      xlsxObj.u_number = xlsxData[i][0]
      xlsxObj.username = xlsxData[i][1]
      let password = "123456"
      password = md5password(password)
      xlsxObj.password = password
      xlsxObj.address = xlsxData[i][2]
      xlsxObj.sex = xlsxData[i][3]
      xlsxObj.classes = xlsxData[i][4]
      xlsxObj.type = xlsxData[i][5]
      xlsxObj.phonenumber = xlsxData[i][6]
      xlsxObj.mailbox = xlsxData[i][7] || null

      const user = await userService.getUserIdByNumber(xlsxObj.u_number)
      if(!user.length) {
        inXlsxArr.push(xlsxObj); 
      }
    }
    let result
    if(inFlag) {
      if(inXlsxArr.length) {
        result = await userService.inXlsxData(inXlsxArr)
      }
    }
    sendStatusHandle(result, ctx)
  }
  // 删除用户(同时清空该用户阅读记录)
  async delUserdata(ctx, next) {
    console.log(ctx.user.type);
    unPermission(ctx)
    const { u_number } = ctx.request.query
    const userInfo = await userService.getUserInfoByNumber(u_number)
    if(!userInfo) {
      const error = new Error(errorType.USER_IS_NOT_EXIST)
      return ctx.app.emit('error', error, ctx)
    }
    if(userInfo[0].type === 1) {
      const error = new Error(errorType.CANT_DELETE_MANAGER)
      return ctx.app.emit('error', error, ctx)
    }
    const u_id = userInfo[0].u_id
    const tableNames = ['user', 'notice', 'leave_out', 'healthy_card', 'avatar', 'announce']
    let result
    tableNames.forEach((tableName) => {
      result += userService.delUserInTableByUid(u_id, tableName)
    })
    sendStatusHandle(result, ctx)
  }
  // 用户信息修改
  async upUserdata(ctx, next) {
    let username, phonenumber, mailbox, sex, address, classes, type
    let {
      q_u_number,
      n_u_number,
      n_username,
      n_phonenumber,
      n_mailbox,
      n_sex,
      n_address,
      n_classes,
      n_type
    } = ctx.request.body
    console.log(ctx.request.body);
    if(q_u_number) {
      const result = await userService.getUserInfoByNumber(q_u_number)
      const userInfo = result[0]
      username = userInfo.username
      mailbox = userInfo.mailbox || ""
      phonenumber = userInfo.phonenumber
      sex = userInfo.sex
      address = userInfo.address
      classes = userInfo.classes
      type = userInfo.type
    }
    if(n_u_number) {
      const result = await userService.getUserInfoByNumber(n_u_number)
      if(result && n_u_number !== q_u_number) {
        const error = new Error(errorType.USER_IS_EXIST)
        return ctx.app.emit('error', error, ctx)
      }
    }
    if(!n_u_number) n_u_number = q_u_number
    if(!n_username) n_username = username
    if(!n_phonenumber) n_phonenumber = phonenumber
    if(!mailbox) n_mailbox = mailbox 
    if(!n_sex) n_sex = sex
    if(!n_address) n_address = address
    if(!n_classes) n_classes = classes
    if(!n_type) n_type = type
    let newUserInfo = [n_u_number, n_username, n_phonenumber, n_mailbox, n_sex, n_address, n_classes, n_type]
    const result = await userService.upUserInfoByNumber(newUserInfo, q_u_number)
    sendStatusHandle(result, ctx)
  }
  async setUser(ctx, next) {
    unPermission(ctx)
    let { u_number, username, phonenumber, mailbox, address, sex, classes, type } = ctx.request.body
    if( !u_number || !username || !phonenumber || !address || !sex || !classes || !type ) {
      console.log("here");
      const error = new Error(errorType.FIELD_CANT_NONE)
      return ctx.app.emit('error', error, ctx)
    }
    const user = await userService.getUserInfoByNumber(u_number)
    if(user.length) {
      const error = new Error(errorType.USER_IS_EXIST)
      return ctx.app.emit('error', error, ctx)
    }
    let password = "123456"
    password = md5password(password)
    const userInfo = [u_number, username, password, phonenumber, mailbox, address, sex, classes, type]
    const result = await userService.setUser(userInfo)
    sendStatusHandle(result, ctx)
  }
  async getUserInfoByNum(ctx, next) {
    unPermission(ctx)
    const { u_number } = ctx.request.body
    console.log(u_number);
    const result = await userService.getUserInfoByNumber(u_number)
    if(!result.length) {
      const error = new Error(errorType.USER_IS_NOT_EXIST)
      return ctx.app.emit('error', error, ctx)
    }
    if(result[0].type !== 2) {
      const error = new Error(errorType.USER_IS_NOT_EXIST)
      return ctx.app.emit('error', error, ctx)
    }
    queryStatusHandle(result[0], ctx)
  }
}

module.exports = new UserController()