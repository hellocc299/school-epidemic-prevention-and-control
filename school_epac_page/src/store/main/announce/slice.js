import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import {
  getAnnounceAction
} from './thunk.js'

export const defaultState = {
  annoCount: 0,
  annoList: {}
}

export const getAnnounceSlice = createSlice({
  name: 'announce',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getAnnounceAction.fulfilled.type]: (state, { payload }) => {
      state.annoCount = payload.count
      state.annoList = payload.data
    },
    [getAnnounceAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})

export default getAnnounceSlice.reducer