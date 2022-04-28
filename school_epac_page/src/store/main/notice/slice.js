import { createSlice } from '@reduxjs/toolkit';
import {
  getSelfNoticeAction
} from './thunk.js'
import { message } from 'antd';

export const defaultState = {
  noticeList: {}
}

export const getSelfNoticeSlice = createSlice({
  name: 'getSelfNotice',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getSelfNoticeAction.fulfilled.type]: (state, { payload }) => {
      state.noticeList = payload.noticeList
    },
    [getSelfNoticeAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})

export default getSelfNoticeSlice.reducer