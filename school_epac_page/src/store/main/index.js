import { combineReducers } from "redux";

import healthyCardReducer from "./healthy-card";
import homeReducer from "./home";
import leaveApplyReducer from './leave-apply'
import stuManageReducer from './stu-manage'
import unhandleLeaveReducer from './leave-handle'
import announceReducer from './announce'
import getAllClassReducer from './operation'
import getSelfNoticeReducer from './notice'

export default combineReducers({
  healCard: healthyCardReducer,
  home: homeReducer,
  leaveApply: leaveApplyReducer,
  stuManage: stuManageReducer,
  leaveHandle: unhandleLeaveReducer,
  announce: announceReducer,
  operation: getAllClassReducer,
  notice: getSelfNoticeReducer
})
