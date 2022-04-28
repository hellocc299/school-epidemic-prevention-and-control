import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import {
  uploadAvatar,
  editPwd
} from '@/service//main/show-info'

export const uploadAction = createAsyncThunk(
  'main/showInfo/upload',
  async (file) => {
    const result = await uploadAvatar(file)
    console.log(result);
    await message.success(result.message)
  }
)

export const editPwdAction = createAsyncThunk(
  'main/showInfo/editPwd',
  async (queryInfo) => {
    const result = await editPwd(queryInfo)
    message.success(result.message)
  }
)