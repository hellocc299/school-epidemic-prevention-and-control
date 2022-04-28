import { createSlice } from '@reduxjs/toolkit';
import {
  getStuByClassAction,
  getStuInfoAction  
} from './thunk'
import { message } from 'antd'

export const defaultState = {
  stuList: [],
  stuCount: 0
}

export const stuManageSlice = createSlice({
  name: 'stuManage',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getStuByClassAction.fulfilled.type]: (state, { payload }) => {
      state.stuList = payload.list
    },
    [getStuByClassAction.rejected.type]: (state, err) => {
      message.error(err)
    },
    [getStuInfoAction.fulfilled.type]: (state, { payload }) => {
       state.stuList = [payload]
    },
    [getStuInfoAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})


export default stuManageSlice.reducer