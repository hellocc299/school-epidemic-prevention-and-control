import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getStuByClassAction } from '@/store/main/stu-manage/thunk'
import { StuDataWrapper } from './style'
import { Table } from 'antd'
import useTableConfig from '@/base-ui/table'

const StuData = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStuByClassAction())
  }, [dispatch])

  const stuList = useSelector(state => state.main.stuManage.stuList, shallowEqual)
  const [columns, dataSource] = useTableConfig(stuList, getStuByClassAction)
  return (
    <StuDataWrapper>
      <Table columns={columns}
             dataSource={dataSource}
             bordered
             rowKey='n_u_number' />
    </StuDataWrapper>
  )
})

export default StuData