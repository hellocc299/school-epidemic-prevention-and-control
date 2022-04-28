import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { OperationWrapper } from './style'
import CCInsert from '@/common/insert'
import { getAllClassAction } from '@/store/main/operation/thunk'
import useTableConfig from '@/base-ui/table'
import { Card, Table, Button } from 'antd'

const Operation = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllClassAction())
  }, [dispatch])
  const allClasses = useSelector(state => state.main.operation.allClasses, shallowEqual)

  const [columns, dataSource] = useTableConfig(allClasses, getAllClassAction)


  return (
    <OperationWrapper>
      <div className='operation'>
        <Card title="班级管理" 
              extra={ 
                <CCInsert type='3' action={getAllClassAction()} />
               }>
          <Table columns={columns} dataSource={dataSource} rowKey='n_u_number'></Table>
        </Card>
      </div>
    </OperationWrapper>
  )
})

export default Operation