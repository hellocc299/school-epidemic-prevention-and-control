import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import {
  getTeacherInfo,
  getTodaySelfCard,
  setHealthyCard
} from '@/service/main/healthy-card'

export const getTeacherInfoAction = createAsyncThunk(
  'main/healCard/teacherInfo',
  async () => {
    const result = await getTeacherInfo()
    return result.queryData[0]
  }
)

export const getTodaySelfCardAction = createAsyncThunk(
  'main/healCard/getTodaySelfCard',
  async () => {
    const result = await getTodaySelfCard()
    return result.queryData
  }
)

export const setHealthyCardCardAction = createAsyncThunk(
  'main/healCard/setHealthyCard',
  async (cardInfo) => {
    const result = await setHealthyCard(cardInfo)
    message.success(result.message)
  }
)