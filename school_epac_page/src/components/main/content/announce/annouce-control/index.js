import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import localCache from '@/utils/cache'
import { AnnounceControlWrapper } from './style'
import { getAnnounceAction, delNoticeAction } from '@/store/main/announce/thunk'
import { Card, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const AccounceControl = memo(() => {
  const dispatch = useDispatch()
  const history = new useHistory()
  const [notice, setNotice] = useState([])
  useEffect(() => {
    dispatch(getAnnounceAction())
  }, [dispatch])
  const annoList = useSelector(state => state.main.announce.annoList, shallowEqual)

  const showEntire = (anno) => {
    localCache.set('anno', anno)
    history.push({ pathname: '/main/entireanno' })
  }

  useEffect(() => {
    setNotice(annoList)
  }, [annoList])

  const deleteHandle = (anno) => {
    if(localCache.get('anno')) {
      localCache.del('anno')
    }
    const a_id = anno.a_id
    dispatch(delNoticeAction(a_id))
    dispatch(getAnnounceAction())
  }
  
  return (
    <AnnounceControlWrapper>
      <div className='anno-control'>
      { Array.from(notice).map((anno) => {
          return(
              <Card title={anno.title} 
                    extra={
                            <div className='extra'>
                              <span className='not-read'><UserOutlined />未读人数：{anno.notReadCount}</span>
                              <span className='delete'>
                              <Button type='primary' onClick={() => deleteHandle(anno)}>删除</Button>
                              </span>
                            </div>
                          }
                    hoverable
                    key={ anno.a_id }>
                <div className='anno-content' onClick={() => showEntire(anno)}>
                  <div className='content'>{ anno.content }</div>
                  <div className='time'>{ moment(anno.create_time).format('YYYY-MM-DD') }</div>
                </div>
              </Card>
          )
          }) 
        }
      </div>
    </AnnounceControlWrapper>
  )
})

export default AccounceControl