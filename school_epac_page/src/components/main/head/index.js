import React, { memo, useEffect, useState } from 'react'
import { HeadWrapper } from './style'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import localCache from '@/utils/cache'

const Head = memo((props) => {
  const { collapsed, sendCol } = props
  const [isFold, setIsFold] = useState(collapsed)

  useEffect(() => {
    sendCol(isFold)
  }, [isFold])

  const changeIsFold = () => {
    setIsFold(!isFold)
  }
  const exit = () => {
    localCache.del('token')
    localCache.del('selfInfo')
  }
  
  return (
    <HeadWrapper>
      <span className='col' onClick={() => changeIsFold()}>
      { isFold ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </span>
      <a className='exit' onClick={exit} href='/'>退出</a>
    </HeadWrapper>
  )
})

export default Head