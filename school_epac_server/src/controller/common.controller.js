const commonService = require("../services/common.service")
const {sendStatusHandle, queryStatusHandle} = require("../utils/status_error_handle")
const errorType = require("../contants/error-type")
const {
  dateFormat
} = require("../utils/date-format");

class CommonController {
  async setHealth(ctx, next) {
    console.log("填报健康卡");
    console.log(ctx.request.body);
    const { u_id, classes } = ctx.user
    const date = new Date()
    const nowDate = dateFormat(date)
    const results = await commonService.getHealthDateByUid(u_id)
    if(results) {
      for(let result of results) {
        if(dateFormat(result.create_time) === nowDate) {
          ctx.status = 403
          ctx.message = "今日已填报！"
          return
        }
      }
    }
    const { 
      temperature, address, healthy_code,  go_add, exposure, leave_out, detection, vaccines, mask, mask_num, disinfect
     } = ctx.request.body
     if(!temperature || !address || !healthy_code ||  !go_add || !exposure || !leave_out || !detection || !vaccines || !mask || !mask_num || !disinfect) {
       const error = new Error(errorType.FIELD_CANT_NONE)
       return ctx.app.emit('error', error, ctx)
     }
     const cardContent = [u_id, classes, temperature, address, healthy_code, go_add, exposure, leave_out, detection, vaccines, mask, mask_num, disinfect]
     const result = await commonService.setHealth(cardContent)
     sendStatusHandle(result, ctx)
  }
  async getSelfInfo(ctx, next) {
    const { u_id } = ctx.user
    const result = await commonService.getSelfInfo(u_id)
    const queryData = result[0]
    queryStatusHandle(queryData, ctx)
  }
}

module.exports = new CommonController()