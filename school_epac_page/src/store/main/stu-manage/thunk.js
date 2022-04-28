import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getStuByClass,
  editStuInfo,
  delStu,
  upload,
  getStuInfo,
  addSingleStu
} from '@/service/main/stu-manage'
import { message } from 'antd'

export const getStuByClassAction = createAsyncThunk(
  'getStuByClass',
  async () => {
    const result = await getStuByClass()
    return result.queryData
  }
)

export const editUserInfoAction = createAsyncThunk(
  'editUserInfo',
  async (queryInfo) => {
    const result = await editStuInfo(queryInfo)
    if(result) {
      message.success(result.message)
    }
  }
)

export const delStuAction = createAsyncThunk(
  'delStu',
  async (u_number) => {
    const result = await delStu(u_number)
    message.success(result.message)
  }
)

export const uploadAction = createAsyncThunk(
  'upload',
  async (file) => {
    const result = await upload(file)
    message.success(result.message)
  }
)

export const getStuInfoAction = createAsyncThunk(
  'getStuInfo',
  async (u_number) => {
    const result = await getStuInfo(u_number)
    return result.queryData
  }
)

export const addSingleStuAction = createAsyncThunk(
  'addSingleStu',
  async (queryInfo) => {
    const result = await addSingleStu(queryInfo)
    if(result) {
      message.success(result.message)
    }
  }
)