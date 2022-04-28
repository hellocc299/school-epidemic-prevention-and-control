import { createSlice } from '@reduxjs/toolkit';
import { 
  getTodayCardAction,
  getMedAndHighCountAction,
  getDetectionCountAction,
  getLeaveOutCountAction
} from './thunk'
import { message } from 'antd'

export const defaultState = {
  cardList: [],
  cardCount: 0,
  mhCount: 0,
  detCount: 0,
  leaveCount: 0
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getTodayCardAction.fulfilled.type]: (state, { payload }) => {
      state.cardList = payload.list
      state.cardCount = payload.count
    },
    [getTodayCardAction.rejected.type]: (state, err) => {
      message.error(err)
    },
    [getMedAndHighCountAction.fulfilled.type]: (state, { payload }) => {
      state.mhCount = payload.count
    },
    [getMedAndHighCountAction.rejected.type]: (state, err) => {
      message.error(err)
    }, 
    [getDetectionCountAction.fulfilled.type]: (state, { payload }) => {
      state.detCount = payload.count
    },
    [getDetectionCountAction.rejected.type]: (state, err) => {
      message.error(err)
    },
    [getLeaveOutCountAction.fulfilled.type]: (state, { payload }) => {
      state.detCount = payload.count
    },
    [getLeaveOutCountAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }    
})

export default homeSlice.reducer