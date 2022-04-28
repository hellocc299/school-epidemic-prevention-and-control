import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUnhandleLeave,
  editLeaveState
} from '@/service/main/leave-list'
import { message } from 'antd';

export const getUnhandleLeaveAction = createAsyncThunk(
  'main/unhandleLeave',
  async () => {
    const result = await getUnhandleLeave()
    return result.queryData
  }
)

export const editLeaveStateAction = createAsyncThunk(
  'main/unhandleLeave',
  async (queryInfo) => {
    const result = await editLeaveState(queryInfo)
    message.success(result.message)
  }
)