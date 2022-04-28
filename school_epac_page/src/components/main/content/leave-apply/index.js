import React, { memo } from 'react'
import { LeaveApplyWrapper } from './style'
import Apply from './apply'
import ApplyList from './apply-list'

const LeaveApply = memo(() => {
  return (
    <LeaveApplyWrapper>
      <Apply />
      <ApplyList />
    </LeaveApplyWrapper>
  )
})

export default LeaveApply