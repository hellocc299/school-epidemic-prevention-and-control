import React, { memo, useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getSelfInfoAction } from '@/store/login/thunk.js'
import { UpdateInfoWrapper } from './style'
import { Divider, List } from 'antd'

const UpdateInfo = memo(() => {
  const dispatch = useDispatch()
  dispatch(getSelfInfoAction())
  const selfInfo = useSelector(state => state.login.selfInfo, shallowEqual)
  const [showValue, setShowValue] = useState([])
  useEffect(() => {
    setShowValue([
      `编号：${selfInfo.u_number}`,
      `姓名：${selfInfo.username}`,
      `邮箱：${selfInfo.mailbox}`,
      `籍贯：${selfInfo.address}`,
      `性别：${selfInfo.sex}`,
      `手机号码：${selfInfo.phonenumber}`,
      `班级：${selfInfo.classes}`
    ])
  }, [selfInfo])
  
  return (
    <UpdateInfoWrapper>
      <div className='update-info'>
        <Divider orientation="left">我的个人信息</Divider>
        <List bordered dataSource={showValue} 
              renderItem={item => (
              <List.Item>{item}</List.Item>
              )} />
      </div>
    </UpdateInfoWrapper>
  )
})

export default UpdateInfo