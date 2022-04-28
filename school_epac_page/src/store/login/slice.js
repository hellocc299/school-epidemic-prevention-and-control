import { createSlice } from '@reduxjs/toolkit';
import { getLoginInfoAction, getSelfInfoAction } from './thunk'
import localCache from '@/utils/cache'
import { message } from 'antd'

const defaultState = {
  token: localCache.get('token') || '',
  selfInfo: localCache.get('selfInfo') || {}
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getLoginInfoAction.fulfilled.type]: (state, { payload }) => {
      state.token = payload.token
      state.selfInfo = payload.loginData
    },
    [getLoginInfoAction.rejected.type]: (state, err) => {
      message.error(err)
    },
    [getSelfInfoAction.fulfilled.type]: (state, { payload }) => {
      state.selfInfo = payload
    },
    [getSelfInfoAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})

export default loginSlice.reducer