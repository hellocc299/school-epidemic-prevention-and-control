const Router = require("koa-router")

const studentRouter = new Router({ prefix: "/student" })

const {
  verifySync
} = require("../middleware/user.middleware")

const {
  setLeave,
  getNotice,
  editNoticeStatu,
  getTeacherInfo,
  getSelfHealthCard,
  getLeaveList
} = require("../controller/student.controller")

// 请假申请
studentRouter.post('/setleave', verifySync, setLeave)
// 我的通知分页获取数据与数量
studentRouter.get('/getnotice', verifySync, getNotice)
// 我的通知修改(未读转已读)
studentRouter.patch('/editnoticestatu', verifySync, editNoticeStatu)
// 获取老师的信息
studentRouter.get('/getteacher', verifySync, getTeacherInfo)
// 获取个人今日健康卡（无论有没有填报都返回）
studentRouter.get('/gethealcard', verifySync, getSelfHealthCard)
// 获取我的所有假条
studentRouter.post('/getleavelist', verifySync, getLeaveList)

module.exports = studentRouter