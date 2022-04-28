const Router = require("koa-router")

const adminRouter = new Router({ prefix: '/admin'})

const { 
  verifySync
} = require("../middleware/user.middleware")

const { 
  getNoticeList,
  getUserListByType,
  getUserListByTypeAndChar,
  getHealthNowDayPage,
  getHealthNowDayByUNumber,
  getHealthMonthByPage,
  getAllHealth,
  getHighCount,
  getDetection,
  getLeaveOut,
  getStuByClasses,
  getAllClasses
} = require("../controller/admin.controller")


// 获取所有通知以及数量(分页获取)
adminRouter.post("/getnotice", verifySync, getNoticeList)
// 根据用户类型进行用户信息获取(分页获取总数量与数据)
adminRouter.get("/getusersbytp", verifySync, getUserListByType)
// 根据用户模糊查询(后面学习es再做)
adminRouter.get("/getusersbytpandchar", verifySync, getUserListByTypeAndChar)
// 获取当天填报表及总数
adminRouter.post('/nowdaycardpage', verifySync, getHealthNowDayPage)
// 获取当天某用户报表
adminRouter.post('/nowdaycardbynumber', verifySync, getHealthNowDayByUNumber)
// 获取当月报表
adminRouter.post('/monthdaycardpage', verifySync, getHealthMonthByPage)
// 获取所有报表
adminRouter.post('/getallhealth', verifySync, getAllHealth)
// 获取14天内去过高危地区的人数
adminRouter.get('/gethigh', verifySync, getHighCount)
// 获取今天核酸人数
adminRouter.get('/getdetection', verifySync, getDetection)
// 获取今天离开学校人数
adminRouter.get('/getleaveout', verifySync, getLeaveOut)
// 查询所有学生且按班级排序
adminRouter.get('/getstubyclass', verifySync, getStuByClasses)
// 通过辅导员获取所有班级
adminRouter.get('/getallclasses', verifySync, getAllClasses)

module.exports = adminRouter