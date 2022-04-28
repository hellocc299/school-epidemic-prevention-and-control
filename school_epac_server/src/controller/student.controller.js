const studentService = require("../services/student.service")
const {sendStatusHandle, queryStatusHandle} = require("../utils/status_error_handle") 
const {
  startTime,
  endTime,
} = require("../utils/date-format")

class StudentController {
  async setLeave(ctx, next) {
    console.log("填写请假条");
    const { u_id, classes } = ctx.user
    const { reason, leaveType, startTime, endTime } = ctx.request.body
    const leaveInfo = [u_id, reason, leaveType, startTime, endTime, classes]
    const result = await studentService.setLeave(leaveInfo)
    sendStatusHandle(result, ctx)
  }
  async getNotice(ctx, next) {
    const { u_id } = ctx.user
    const result = await studentService.getNoticeCount(u_id)
    const noticeList = await studentService.getNoticeList(u_id)
    const count = result[0].count
    const queryData = {
      count,
      noticeList
    }
    queryStatusHandle(queryData, ctx)
  }
  async editNoticeStatu(ctx, next) {
    const { u_id } = ctx.user
    const { a_id } = ctx.request.body
    console.log(a_id);
    const result = await studentService.editNoticeStatu(u_id, a_id)
    sendStatusHandle(result, ctx)
  }
  async getTeacherInfo(ctx, next) {
    const { classes } = ctx.user
    const result = await studentService.getTeaByClass(classes)
    queryStatusHandle(result, ctx)
  }
  async getSelfHealthCard(ctx, next) {
    const { u_id } = ctx.user
    let result = await studentService.getSelfHealthCardById(u_id, startTime, endTime)
    const queryData = result
    const data = {
      code: 1001,
      queryData
    }
    ctx.body = data
  }
  async getLeaveList(ctx, next) {
    const { u_id } = ctx.user
    const result = await studentService.getLeaveListById(u_id)
    queryStatusHandle(result, ctx)
  }
}

module.exports = new StudentController()