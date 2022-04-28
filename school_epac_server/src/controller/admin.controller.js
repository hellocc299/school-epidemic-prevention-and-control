const adminService = require("../services/admin.service")
const userService = require("../services/user.services")
const errorType = require("../contants/error-type")
const {sendStatusHandle, queryStatusHandle} = require("../utils/status_error_handle")
const unPermission = require("../utils/unpermission")

const {
  startTime,
  endTime,
  firstDate,
  endDate,
  getTwoLastWeek
} = require("../utils/date-format")

class AdminController {
  async getNoticeList(ctx, next) {
    console.log("获取本班所有通知");
    unPermission(ctx)
    const { classes } = ctx.user
    const { pageNum, currPage } = ctx.request.body
    let count = await adminService.getAllNoticeCount()
    let list = await adminService.getNoticeList(classes, pageNum + '', currPage + '')
    let data = []
    for(let i = 0; i < list.length; i++) {
      let dataObj = {}
      dataObj.a_id = list[i].a_id
      const notReadCount = await adminService.getCountByAid(dataObj.a_id)
      dataObj.u_id = list[i].u_id
      dataObj.title = list[i].title
      dataObj.content = list[i].content
      dataObj.classes = list[i].classes
      dataObj.create_time = list[i].create_time
      dataObj.notReadCount = notReadCount[0].count
      data.push(dataObj)
    }
    count = count[0].count
    const queryData = {
      count,
      data
    }
    queryStatusHandle(queryData, ctx)
  }
  async getUserListByType(ctx, next) {
    unPermission(ctx)
    const { type, pageNum, currentPage } = ctx.request.body
    let count = await adminService.getUserCountByType(type)
    const list = await adminService.getUserListByType(type, pageNum + '', currentPage + '')
    count = count[0].count
    const queryData = {
      count,
      list
    }
    queryStatusHandle(queryData, ctx)
  }
  async getUserListByTypeAndChar(ctx, next) {
    
  }
  async getHealthNowDayPage(ctx, next) {
    unPermission(ctx)
    const { pageNum, currPage } = ctx.request.body
    let count, list;
    if(ctx.user.type === 3) {
      const { classes } = ctx.user
      count = await adminService.getHealthNowDayCountByClasses(classes, startTime, endTime)
      list = await adminService.getHealthNowDayListByClasses(classes, startTime, endTime, pageNum + '', currPage + '')
    } else {
      count = await adminService.getHealthNowDayCount(startTime, endTime)
      list = await adminService.getHealthNowDayList(startTime, endTime, pageNum + '', currPage + '')
    } 
    count = count[0].count
    queryStatusHandle({count, list}, ctx)
  }
  // 根据编号获取健康卡
  async getHealthNowDayByUNumber(ctx, next) {
    unPermission(ctx)
    const { u_number } = ctx.request.body
    const result = await userService.getUserIdByNumber(u_number)
    if(!result) {
      const error = new Error(errorType.USER_IS_NOT_EXIST)
      return ctx.app.emit('error', error, ctx)
    }
    const u_id = result[0].u_id
    const nowHealthData = await adminService.getHealthNowDayByUid(startTime, endTime, u_id)
    queryStatusHandle(nowHealthData[0] || "", ctx)
  }
  // 这个月健康卡填报情况
  async getHealthMonthByPage(ctx, next) {
    unPermission(ctx)
    const { pageNum, currPage } = ctx.request.body
    const healthList = await adminService.getHealthMonthList(firstDate, endDate, pageNum+'', currPage+'')
    queryStatusHandle(healthList, ctx)
  }
  // 获取全部健康卡
  async getAllHealth(ctx, next) {
    unPermission(ctx)
    const { pageNum, currPage } = ctx.request.body
    const healthList = await adminService.getAllHealth(pageNum+'', currPage+'')
    queryStatusHandle(healthList, ctx)
  }
  // 十四天是否去过高风险地区
  async getHighCount(ctx, next) {
    unPermission(ctx)
    const lastTwo = getTwoLastWeek(startTime)
    let count;
    if(ctx.user.type === 3 ) {
      const classes = ctx.user.classes
      count = await adminService.getHighCountByClasses(classes, lastTwo, startTime)
    } else {
      count = await adminService.getHighCount(lastTwo, startTime)
    }
    queryStatusHandle(count[0], ctx)
  }
  async getDetection(ctx, next) {
    unPermission(ctx)
    let count;
    if(ctx.user.type === 3 ) {
      const { classes } = ctx.user
      count = await adminService.getDetectionCountByClasses(classes, startTime, endTime)
    }
    count = await adminService.getDetectionCount(startTime, endTime)
    queryStatusHandle(count[0], ctx)
  }
  async getLeaveOut(ctx, next) {
    unPermission(ctx)
    let count;
    if(ctx.user.type === 3 ) {
      const { classes } = ctx.user
      count = await adminService.getLeaveOutCountByClasses(classes, startTime, endTime)
    } else {
      count = await adminService.getLeaveOutCount(startTime, endTime)
    } 
    queryStatusHandle(count[0], ctx)
  }
  async getStuByClasses(ctx, next) {
    unPermission(ctx)
    const { type, classes } = ctx.user
    let list, count
    if(type === 3) {
      list = await adminService.getStuListByClasses(classes)
      count = await adminService.getStuCountByClasses(classes)
    } else {
      list = await adminService.getStuList()
      count = await adminService.getStuCount()
    }
    count = count[0].count
    const queryData = {
      count, list
    }
    queryStatusHandle(queryData, ctx)
  }
  async getAllClasses(ctx, next) {
    unPermission(ctx)
    const list = await adminService.getAllClasses()
    queryStatusHandle(list, ctx)
  }
}

module.exports = new AdminController()