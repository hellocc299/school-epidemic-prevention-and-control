const Router = require("koa-router")

const teacherRouter = new Router({ prefix: "/teacher" })

const {
  verifySync
} = require("../middleware/user.middleware")

const {
  getLeave,
  notApproved,
  upLeaveState,
  announce,
  delNotice 
} = require("../controller/teacher.controller")

// 发布通知
teacherRouter.post("/announce", verifySync, announce)
// 删除通知
teacherRouter.delete("/delnotice", verifySync, delNotice)
// 获取该老师所属班级的全部请假单与数量(分页查询)
teacherRouter.post('/getleave', verifySync, getLeave)
// 获取该班级所有未审批的请假条
teacherRouter.get('/notapproved', verifySync, notApproved)
// 当前请假单审批(修改审批状态)
teacherRouter.post('/upleavestate', verifySync, upLeaveState)

module.exports = teacherRouter