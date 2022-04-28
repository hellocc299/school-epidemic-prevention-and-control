import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import localCache from '@/utils/cache'
import { Redirect, useHistory } from 'react-router-dom'
import { getAnnounceAction, delNoticeAction } from '@/store/main/announce/thunk'
import { EntireAnnoWrapper } from './style'
import { Card, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const EntireAnno = memo((props) => {
  const dispatch = useDispatch()
  const history = new useHistory()
  const anno = localCache.get('anno') 
  const selfInfo = useSelector(state => state.login.selfInfo)

  const deleteHandle = async () => {
    if(localCache.get('anno')) {
      localCache.del('anno')
    }
    const a_id = anno.a_id
    await dispatch(delNoticeAction(a_id))
    await dispatch(getAnnounceAction())
    history.push({ pathname: '/main/annocontrol' })
  }

  return (
    <EntireAnnoWrapper>
      <div className='entire-anno'>
        <Card title={ anno.title } 
              extra={
                      <div className='extra'>
                        <span className='not-read'><UserOutlined />未读人数：{anno.notReadCount}</span>
                        <span className='delete'>
                          <Button type='primary' 
                                  onClick={() => deleteHandle()}
                                  style={ selfInfo.type === 2 ? { display: 'none' } : { display: 'block' } } >
                                    删除
                          </Button>
                        </span>
                      </div>
                    }>
          <div className='anno-content'>
            <div className='content'>{ anno.content }</div>
            <div className='time'>{ moment(anno.create_time).format('YYYY-MM-DD') }</div>
          </div>
        </Card>
      </div>
    </EntireAnnoWrapper>
  )
})

export default EntireAnno