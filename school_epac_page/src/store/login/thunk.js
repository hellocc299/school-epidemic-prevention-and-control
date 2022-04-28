import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loginRequest,
  getSelfInfo
} from '@/service/login'

export const getLoginInfoAction = createAsyncThunk(
  'login/getToken',
  async (account) => {
    const result = await loginRequest(account)
    return result.queryData
  }
)

export const getSelfInfoAction = createAsyncThunk(
  'login/selfInfo',
  async () => {
    const result = await getSelfInfo()
    return result.queryData
  }
)