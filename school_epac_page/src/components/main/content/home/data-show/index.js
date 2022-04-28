import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {DataShowWrapper} from './style'
import { Card } from 'antd'
import {
  getTodayCardAction,
  getMedAndHighCountAction,
  getDetectionCountAction,
  getLeaveOutCountAction
} from '@/store/main/home/thunk.js'
import {
  ExportOutlined,
  UsergroupAddOutlined,
  FormOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

const DataBanner = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodayCardAction())
  }, [dispatch])
  useEffect(() => {
    dispatch(getMedAndHighCountAction())
  }, [dispatch])
  useEffect(() => {
    dispatch(getDetectionCountAction())
  }, [dispatch])
  useEffect(() => {
    dispatch(getLeaveOutCountAction())
  }, [dispatch])

  const { cardCount, mhCount, detCount, leaveCount } = useSelector(state => state.main.home, shallowEqual)

  return (
    <DataShowWrapper>
      <div className='data-show'>
        <Card hoverable style={{ backgroundColor: "#4899AC" }}>
          <div className='card-content'>
            <span>
              <h1>{ leaveCount }</h1>
              <p>今日离校人数</p>
            </span>
            <ExportOutlined />
          </div>
        </Card>
        <Card hoverable style={{ backgroundColor: "#65DB79" }}>
          <div className='card-content'>
            <span>
              <h1>{ cardCount }</h1>
              <p>今日健康卡填报人数</p>
            </span>
            <FormOutlined />
          </div>
        </Card>
        <Card hoverable style={{ backgroundColor: "#B8312D" }}>
          <div className='card-content'>
            <span>
              <h1>{ mhCount }</h1>
              <p>14天内经过中高风险地区人数</p>
            </span>
            <ExclamationCircleOutlined />
          </div>
        </Card>
        <Card hoverable style={{ backgroundColor: "#F4C143" }}>
          <div className='card-content'>
            <span>
              <h1>{ detCount }</h1>
              <p>今日检测核酸人数</p>
            </span>
            <UsergroupAddOutlined />
          </div>
        </Card>
      </div>
    </DataShowWrapper>
  )
})

export default DataBanner