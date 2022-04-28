import { createSlice } from '@reduxjs/toolkit';
import {
  getUnhandleLeaveAction
} from './thunk.js'
import { message } from 'antd';

export const defaultState = {
  unhandleLeaveList: {}
}

export const unhandleLeaveSlice = createSlice({
  name: 'unhandleLeave',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getUnhandleLeaveAction.fulfilled.type]: (state, { payload }) => {
      state.unhandleLeaveList = payload
    },
    [getUnhandleLeaveAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})

export default unhandleLeaveSlice.reducer