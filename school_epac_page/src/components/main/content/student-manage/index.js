import React, { memo } from 'react'
import { StuManageWrapper } from './style'
import StuSearch from './stu-search'
import StuData from './stu-data'

const StudentManage = memo(() => {
  return (
    <StuManageWrapper>
      <StuSearch />
      <StuData />
    </StuManageWrapper>
  )
})

export default StudentManage