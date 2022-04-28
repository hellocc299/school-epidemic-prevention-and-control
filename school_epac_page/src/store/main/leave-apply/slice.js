import { createSlice } from '@reduxjs/toolkit';
import {
  getLeaveListAction
} from './thunk'
import { message } from 'antd'

export const defaultState = {
  leaveList: []
}

export const leaveApplySlice = createSlice({
  name: 'leaveApply',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getLeaveListAction.fulfilled.type]: (state, { payload }) => {
      state.leaveList = payload
    },
    [getLeaveListAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})

export default leaveApplySlice.reducer