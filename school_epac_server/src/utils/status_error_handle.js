const errorType = require("../contants/error-type")
function sendStatusHandle(result, ctx) {
  if(result) {
    ctx.status = 200
    ctx.body = {
      code: 1001,
      message: "操作成功！"
    }
  } else {
    const error = new Error(errorType.SEND_ERROR)
    return ctx.app.emit('error', error, ctx)
  }
}

function queryStatusHandle(queryData, ctx) {
  if(queryData) {
    const data = {
      code: 1001,
      queryData
    }
    ctx.body = data
  } else {
    const data = {
      code: -1001,
      message: "请求的资源不存在！"
    }
    ctx.body = data
  }
}

module.exports = {sendStatusHandle, queryStatusHandle}
