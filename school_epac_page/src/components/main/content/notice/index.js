import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import localCache from '@/utils/cache'
import { getSelfNoticeAction } from '@/store/main/notice/thunk'
import { NoticeWrapper } from './style'
import { Card } from 'antd'

const Notice = memo(() => {
  const dispatch = useDispatch()
  const history = new useHistory()
  useEffect(() => {
    dispatch(getSelfNoticeAction())
  }, [dispatch])
  const noticeList = useSelector(state => state.main.notice.noticeList)
  const showEntire = async (anno) => {
    localCache.set('anno', anno)
    history.push({ pathname: '/main/entire' })
  }
  return (
    <NoticeWrapper>
      <div className='notice'>
        { Array.from(noticeList).map((anno) => {
          return (
            <Card title={anno.anno.title} key={anno.n_id} hoverable>
              <div className='anno-content'>
                <div className='content' onClick={() => showEntire(anno)}>{anno.anno.content}</div>
                <div className='time-statu'>
                  <span className='send-time'>发布时间：{ moment(anno.anno.create_time).format('YYYY-MM-DD') }</span>
                  <span>{ anno.statu === 0 ? '未读' : '已读' }</span>
                </div>
              </div>
            </Card>
          )
        }) }
      </div>
    </NoticeWrapper>
  )
})

export default Notice