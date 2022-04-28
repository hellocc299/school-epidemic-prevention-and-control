import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import {
  leaveApply,
  getLeaveList
} from '@/service/main/leave-apply'

export const leaveApplyAction = createAsyncThunk(
  'main/leave/leaveApply',
  async (queryInfo) => {
    const result = await leaveApply(queryInfo)
    message.success(result.message)
  }
)

export const getLeaveListAction = createAsyncThunk(
  'main/leave/getLeaveList',
  async () => {
    const result = await getLeaveList()
    return result.queryData
  }
)