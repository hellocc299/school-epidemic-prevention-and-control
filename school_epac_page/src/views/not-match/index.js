import React, { memo } from 'react'
import { NotMatchWrapper } from './style'

const NotMatch = memo(() => {
  return (
    <NotMatchWrapper>Not Found!</NotMatchWrapper>
  )
})

export default NotMatch