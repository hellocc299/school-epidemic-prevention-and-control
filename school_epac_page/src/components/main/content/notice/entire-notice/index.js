import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import localCache from '@/utils/cache'
import { getSelfNoticeAction, switchStatuAction } from '@/store/main/notice/thunk'
import { EntireNoticeWrapper } from './style'
import moment from 'moment'
import { Card } from 'antd'

const EntireNotice = memo(() => {
  const dispatch = useDispatch()
  const anno = localCache.get('anno')
  useEffect(() => {
    dispatch(switchStatuAction({a_id: (anno.anno.a_id)}))
  }, [dispatch])
  return (
    <EntireNoticeWrapper>
      <div className='entire-anno'>
        <Card title={ anno.anno.title }>
          <div className='anno-content'>
            <div className='content'>{ anno.anno.content }</div>
            <div className='time-statu'>
              <span className='send-time'>发布时间：{ moment(anno.anno.create_time).format('YYYY-MM-DD') }</span>
              <span>{ anno.statu === 0 ? '未读' : '已读' }</span>
            </div>
          </div>
        </Card>
      </div>
    </EntireNoticeWrapper>
  )
})

export default EntireNotice