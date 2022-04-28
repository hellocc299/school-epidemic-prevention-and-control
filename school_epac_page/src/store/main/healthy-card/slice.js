import { createSlice } from '@reduxjs/toolkit';
import { getTeacherInfoAction, getTodaySelfCardAction } from './thunk'
import { message } from 'antd'

export const defaultState = {
  teacInfo: {},
  selfCard: {}
}

export const healthyCardSlice = createSlice({
  name: 'healthyCard',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getTeacherInfoAction.fulfilled.type]: (state, { payload }) => {
      state.teacInfo = payload
    },
    [getTeacherInfoAction.rejected.type]: (state, err) => {
      message.error(err)
    },
    [getTodaySelfCardAction.fulfilled.type]: (state, { payload }) => {
      state.selfCard = payload
    },
    [getTodaySelfCardAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  },
})

export default healthyCardSlice.reducer