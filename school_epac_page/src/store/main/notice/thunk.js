import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getSelfNotice,
  switchStatu
} from '@/service/main/notice'

export const getSelfNoticeAction = createAsyncThunk(
  'main/getSelfNotice',
  async () => {
    const result = await getSelfNotice()
    return result.queryData
  }
)

export const switchStatuAction = createAsyncThunk(
  'main/switchStatu',
  async (a_id) => {
    const result = await switchStatu(a_id)
    return result
  }
)