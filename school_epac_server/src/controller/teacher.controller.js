const teacherService = require("../services/teacher.service")
const adminService = require("../services/admin.service")
const {sendStatusHandle, queryStatusHandle} = require("../utils/status_error_handle")
const unPermission = require("../utils/unpermission")
const errorType = require("../contants/error-type")
const { 
  startTime, endTime
} = require("../utils/date-format")

class TeacherController {
  async announce(ctx, next) {
    unPermission(ctx)
    const { classes } = ctx.user
    const { title, content } = ctx.request.body
    const { u_id } = ctx.user
    let announceResult
    let a_id = []
    let result
    announceResult = await teacherService.announce(ctx, u_id, title, content, classes)
    const aid = await adminService.getTodAllNoticeByUid(u_id, classes, startTime, endTime)
    a_id = aid[aid.length-1]
    const uid = await adminService.getUidByClasses(classes)
    for(let u_id of uid) {
      result += await teacherService.setNotice(u_id.u_id, a_id.a_id, classes)
    }
    sendStatusHandle(result, ctx)
  }
  async delNotice(ctx, next) {
    console.log("删除通知");
    unPermission(ctx)
    const { a_id } = ctx.request.body
    const exit = await teacherService.getNoticeById(a_id)
    if(!exit.length) {
      const error = new Error(errorType.DATA_IS_NOT_EXIST)
      return ctx.app.emit('error', error, ctx)
    }
    const result = await teacherService.delNotice(a_id)
    sendStatusHandle(result, ctx)
  }
  // 获取该老师所属班级的全部请假单与数量(分页查询)
  async getLeave(ctx, next) {
    console.log("获取该老师班级所有请假单");
    unPermission(ctx)
    const { classes } = ctx.user
    const { pageNum, currPage } = ctx.request.body
    let count = await teacherService.getAllLeaveCount(classes)
    const allLeaveList = await teacherService.getAllLeaveList(classes, pageNum+'', currPage+'')
    let dataObj = {}
    let list = []
    for(let i = 0; i < allLeaveList.length; i++) {
      dataObj.classes = allLeaveList[i].classes
      dataObj.create_time = allLeaveList[i].create_time
      dataObj.end_time = allLeaveList[i].end_time
      dataObj.leave_type = allLeaveList[i].leave_type
      dataObj.reason = allLeaveList[i].reason
      dataObj.start_time = allLeaveList[i].start_time
      dataObj.u_id = allLeaveList[i].u_id
      dataObj.username = (await teacherService.getStuNameById(allLeaveList[i].u_id))[0].username
      dataObj.u_number = (await teacherService.getStuNameById(allLeaveList[i].u_id))[0].u_number
      console.log(dataObj.username);
      list.push(dataObj)
    }
    count = count[0].count
    const queryData = {
      count, 
      list
    }
    queryStatusHandle(queryData, ctx)
  }
  // 获取该班级所有未审批的请假条
  async notApproved(ctx, next) {
    console.log("获取该班级所有未审批的请假条");
    unPermission(ctx)
    const { classes } = ctx.user
    const notApprovedList = await teacherService.getNotApproved(classes)
    // console.log(notApprovedList);
    let list = []
    for(let i = 0; i < notApprovedList.length; i++) {
      let dataObj = {}
      dataObj.classes = notApprovedList[i].classes
      dataObj.create_time = notApprovedList[i].create_time
      dataObj.end_time = notApprovedList[i].end_time
      dataObj.leave_type = notApprovedList[i].leave_type
      dataObj.reason = notApprovedList[i].reason
      dataObj.start_time = notApprovedList[i].start_time
      dataObj.u_id = notApprovedList[i].u_id
      dataObj.l_id = notApprovedList[i].l_id
      dataObj.state = notApprovedList[i].state
      dataObj.username = (await teacherService.getStuInfoById(notApprovedList[i].u_id))[0].username
      dataObj.u_number = (await teacherService.getStuInfoById(notApprovedList[i].u_id))[0].u_number
      list.push(dataObj)
    }
    queryStatusHandle(list, ctx)
  }
  // 当前请假单审批(修改审批状态)
  async upLeaveState(ctx, next) {
    console.log("当前请假单审批(修改审批状态)");
    unPermission(ctx)
    const { l_id, upState } = ctx.request.body
    const result = await teacherService.upLeaveState(l_id, upState)
    sendStatusHandle(result, ctx)
  }
}

module.exports = new TeacherController()