const errorType = require("../contants/error-type")

const errorHandle = (err, ctx) => {
  let status, message
  switch (err.message) {
    case errorType.NAME_OR_PASSWORD_OR_TYPE_IS_NOT_EXIST:
      status = 403
      message = "用户名、密码和类型不可为空"
      break;
    case errorType.PASSWORD_IS_WRONG:
      status = 403
      message = "密码错误"
      break;
    case errorType.USER_IS_EXIST:
      status = 403
      message = "用户已经存在"
      break;
    case errorType.USER_IS_NOT_EXIST:
      status = 403
      message = "用户不存在"
      break;
    case errorType.UNAUTHORIZATION:
      status = 401
      message = "token无效"
      break;
    case errorType.UNPEIMISSION: 
      status = 403
      message = "没有访问权限"
      break;
    case errorType.AVATAR_UPLOAD_FAILURE:
      status = 405
      message = "头像上传失败"
      break;
    case errorType.PASSWORD_IS_NONSTANDARD:
      status = 403
      message = "密码为6～15位且必须包含字母，可包含下划线和."
      break;
    case errorType.SEND_ERROR:
      status = 417
      message = "由于网络原因，发送失败！"
      break;
    case errorType.QUERY_ERROR:
      status = 417
      message = "由于网络问题，获取失败！"
      break;
    case errorType.FILE_FORMAT_UPLOAD_ERROR:
      status = 417
      message = "文件格式错误，上传失败！"
      break;
    case errorType.FILE_FORMAT_IMPORT_ERROR:
      status = 417
      message = "文件格式错误，导入失败！"
      break;
    case errorType.NETWORK_ERROR:
      status = 417
      message = "由于网络问题，操作失败！"
      break;
    case errorType.TABLE_DATA_FORMAT_ERROR:
      status = 417
      message = "表格数据错误，导入失败！"
      break;
    case errorType.CANT_DELETE_MANAGER:
      status = 417
      message = "错误的操作，不可以删除管理员！"
      break;
    case errorType.FIELD_CANT_NONE:
      status = 417
      message = "字段不可为空！"
      break;
    case errorType.DATA_IS_NOT_EXIST:
      status = 417
      message = "数据不存在！"
      break;
    default:
      status = 404
      message = "NOT FOUND"
      break;
  }
  ctx.status = status
  ctx.body = message
}
module.exports = errorHandle