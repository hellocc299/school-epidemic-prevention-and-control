import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getTodayCardRequest,
  getMedAndHigh,
  getDetection,
  getLeaveOut
} from '@/service/main/home'

export const getTodayCardAction = createAsyncThunk(
  'main/home/getTodayCard',
  async (defaultInfo = { pageNum: 0, currPage: 10 }) => {
    const result = await getTodayCardRequest(defaultInfo)
    return result.queryData
  }
)

export const getMedAndHighCountAction = createAsyncThunk(
  'main/home/getMedAndHigh',
  async () => {
    const result = await getMedAndHigh()
    return result.queryData
  }
)

export const getDetectionCountAction = createAsyncThunk(
  'main/home/getDetection',
  async () => {
    const result = await getDetection()
    return result.queryData
  }
)

export const getLeaveOutCountAction = createAsyncThunk(
  'main/home/getLeaveOut',
  async () => {
    const result = await getLeaveOut()
    return result.queryData
  }
)