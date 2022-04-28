import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import {
  sendAnnounce,
  getAnnounce,
  delNotice
} from '@/service/main/announce'

export const sendAnnounceAction = createAsyncThunk(
  'main/sendAnnounce',
    async (queryInfo) => {
      const result = await sendAnnounce(queryInfo)
      message.success(result.message)
  }
)

export const getAnnounceAction = createAsyncThunk(
  'main/getAnnounce',
    async (queryInfo = { pageNum: 0, currPage: 10 }) => {
      const result = await getAnnounce(queryInfo)
      return result.queryData
  }
)

export const delNoticeAction = createAsyncThunk(
  'main/delNotice',
  async (a_id) => {
    const result = await delNotice({ a_id })
    message.success(result.message)
}
)