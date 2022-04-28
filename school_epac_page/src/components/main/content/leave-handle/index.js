import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { getUnhandleLeaveAction, editLeaveStateAction } from '@/store/main/leave-handle/thunk'
import { LeaveHandleWrapper } from './style'
import { Table, Space, Button, Tooltip } from 'antd'

const LeaveHandle = memo(() => {
  const [dataSource, setDatasouce] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUnhandleLeaveAction())
  }, [dispatch])
  const unhandleLeaveList = useSelector(state => (state.main.leaveHandle.unhandleLeaveList), shallowEqual)

  const passState = (record) => {
    const queryInfo = {
      l_id: record.l_id,
      upState: 1
    }
    dispatch(editLeaveStateAction(queryInfo))
    dispatch(getUnhandleLeaveAction())
  }

  const failState = (record) => {
    const queryInfo = {
      l_id: record.l_id,
      upState: 2
    }
    dispatch(editLeaveStateAction(queryInfo))
    dispatch(getUnhandleLeaveAction())
  }

  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      render: (text,record,index) => `${index+1}`,
    },
    {
      title: '学号',
      dataIndex: 'u_number',
      key: 'u_number',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },
    {
      title: '请假类型',
      dataIndex: 'type',
      key: 'type',
      align: 'center'
    },
    {
      title: '请假原因',
      dataIndex: 'reason',
      key: 'reason',
      align: 'center',
      render: (text, record, index) => (
        <Tooltip title={ record.reason }>
          <span>{ record.reason.slice(0, 5) }</span>
        </Tooltip>
      )
    },
    {
      title: '请假时间',
      dataIndex: 'time',
      key: 'time',
      align: 'center'
    },
    {
      title: '申请时间',
      dataIndex: 'create_time',
      key: 'create_time',
      align: 'center'
    },
    {
      title: "操作",
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      render: (text, record, index) => (
        <Space size='small'>
          <Button ghost type='primary' size='small' onClick={() => passState(record)}>通过</Button>
          <Button danger size='small' onClick={() => failState(record)}>不通过</Button>
        </Space>
      )
    }
  ]
  useEffect(() => {
    let data = []
    if(unhandleLeaveList instanceof Array) {
      for(let i = 0; i < unhandleLeaveList.length; i++) {
        let dataObj = {}
        dataObj.key = unhandleLeaveList[i].l_id
        dataObj.l_id = unhandleLeaveList[i].l_id
        dataObj.u_number = unhandleLeaveList[i].u_number
        dataObj.username = unhandleLeaveList[i].username
        dataObj.type = (unhandleLeaveList[i].type === 0 ? '事假' : '病假')
        dataObj.reason = unhandleLeaveList[i].reason
        dataObj.time = (`${unhandleLeaveList[i].start_time}~${unhandleLeaveList[i].end_time}`)
        dataObj.create_time = moment(unhandleLeaveList[i].create_time).format('YYYY-MM-DD')
        data.push(dataObj)
      }
      setDatasouce(data)
    }
  }, [unhandleLeaveList])

  return (
    <LeaveHandleWrapper>
      <div className='leave-handle'>
        <Table columns={columns} dataSource={dataSource}/>
      </div>
    </LeaveHandleWrapper>
  )
})

export default LeaveHandle