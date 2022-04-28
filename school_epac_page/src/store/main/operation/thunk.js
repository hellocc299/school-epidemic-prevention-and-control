import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllClass
} from '@/service/main/operation'

export const getAllClassAction = createAsyncThunk(
  'main/getAllClass',
  async () => {
    const result = await getAllClass()
    return result.queryData
  }
)