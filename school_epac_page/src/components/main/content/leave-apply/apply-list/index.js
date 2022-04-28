import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getLeaveListAction } from '@/store/main/leave-apply/thunk'
import moment from 'moment'
import { ApplyListWrapper } from './style'
import { Table, Card } from 'antd'

const ApplyList = memo(() => {
  const dispatch = useDispatch()
  const [dataSource, setDatasouce] = useState([])

  useEffect(() => {
    dispatch(getLeaveListAction())
  }, [dispatch])
  const leaveList = useSelector(state => state.main.leaveApply.leaveList, shallowEqual)
  useEffect(() => {
    let data = []
    for(let i = 0; i < leaveList.length; i++) {
      const dataObj = {}
      dataObj.key = leaveList.u_id
      dataObj.type = (leaveList[i].type === 1 ? "病假" : "事假")
      dataObj.time = (`${leaveList[i].start_time}~${leaveList[i].end_time}`)
      dataObj.create_time = moment(leaveList[i].create_time).format('YYYY-MM-DD')
      dataObj.state = leaveList[i].state
      switch(dataObj.state) {
        case 0:
          dataObj.state = "未审批"
          break;
        case 1: 
          dataObj.state = "通过"
          break;
        case 2:
          dataObj.state = "不通过"
          break;
        default:
          dataObj.state = dataObj.state
      }
      data.push(dataObj)
    }
    setDatasouce(data)
  }, [leaveList]) 
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      render: (text,record,index) => `${index+1}`,
    },
    {
      title: '请假类型',
      dataIndex: 'type',
      key: 'type',
      align: 'center'
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
      title: '申请状态',
      dataIndex: 'state',
      key: 'state',
      align: 'center'
    }
  ]
  return (
    <ApplyListWrapper>
      <div className='apply-list'>
        <Card title='我的申请'>
          <Table dataSource={dataSource} columns={columns} rowKey='key' />
        </Card>
      </div>
    </ApplyListWrapper>
  )
})

export default ApplyList