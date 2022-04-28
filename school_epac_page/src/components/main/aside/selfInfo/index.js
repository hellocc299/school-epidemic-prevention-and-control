import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSelfInfoAction } from '@/store/login/thunk.js'
import { SelfInfoWrapper } from './style'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const SelfInfo = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSelfInfoAction())
  }, [dispatch])
  const selfInfo = useSelector(state => state.login.selfInfo, shallowEqual)
  const { avatar_url, username } = selfInfo

  const back = () => {
    // console.log("back");
  }

  return (
    <SelfInfoWrapper>
      <span className='avatar' onClick={() => back()}>
        <Avatar src={avatar_url}
                    size='large'
                    icon={<UserOutlined />} />
      </span>
      <span className='username'>{username}</span>
    </SelfInfoWrapper>
  )
})

export default SelfInfo