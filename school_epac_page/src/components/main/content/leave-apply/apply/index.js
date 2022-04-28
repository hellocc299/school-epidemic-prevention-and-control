import React, { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { ApplyWrapper } from './style'
import { leaveApplyAction, getLeaveListAction } from '@/store/main/leave-apply/thunk'
import { Card, Form, Select, DatePicker, Input, Button } from 'antd'
import { useForm } from 'antd/lib/form/Form'
const { Option } = Select
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Apply = memo(() => {
  const [form] = useForm()
  const dispatch = useDispatch()

  const apply = async () => {
    const leaveType = form.getFieldValue('leaveType')
    const reason = form.getFieldValue('reason')
    const startTime = moment(form.getFieldValue('time')[0]).format('YYYY-MM-DD')
    const endTime = moment(form.getFieldValue('time')[1]).format('YYYY-MM-DD')
    const queryInfo = {
      leaveType,
      reason,
      startTime,
      endTime
    }
    await dispatch(leaveApplyAction(queryInfo))
    await dispatch(getLeaveListAction())
    form.resetFields()
  }
  
  return (
    <ApplyWrapper>
      <div className='apply'>
        <Card title="填写请假条">
          <Form form={form} name='form'>
            <Form.Item name='leaveType' label='请假类型'>
              <Select style={{ width: '150px' }}>
                <Option value='0'>事假</Option>
                <Option value='1'>病假</Option>
              </Select>
            </Form.Item>
            <Form.Item name='time' label='请假时间'>
              <RangePicker format={'YYYY-MM-DD'} />
            </Form.Item>
            <Form.Item name='reason' label='请假理由'>
              <TextArea style={{ width: '200px', resize: 'none' }}/>
            </Form.Item>
          </Form>
          <Button type='primary' onClick={() => apply()}>提交</Button>
        </Card>
      </div>
    </ApplyWrapper>
  )
})

export default Apply