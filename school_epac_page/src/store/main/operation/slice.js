import { createSlice } from '@reduxjs/toolkit';
import {
  getAllClassAction
} from './thunk.js'
import { message } from 'antd';

export const defaultState = {
  allClasses: {}
}

export const getAllClassSlice = createSlice({
  name: 'allClasses',
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getAllClassAction.fulfilled.type]: (state, { payload }) => {
      state.allClasses = payload
    },
    [getAllClassAction.rejected.type]: (state, err) => {
      message.error(err)
    }
  }
})

export default getAllClassSlice.reducer