import React, { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import localCache from '@/utils/cache'
import { sendAnnounceAction, getAnnounceAction } from '@/store/main/announce/thunk'
import { SendAccounceWrapper } from './style'
import { Form, Input, Button, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
const { TextArea } = Input;

const SendAnnounce = memo(() => {
  const dispatch = useDispatch()

  const [form] = useForm()
  const reset = () => {
    form.resetFields()
  }
  
  const submit = async () => {
    const title = form.getFieldValue('title')
    const content = form.getFieldValue('content')
    if(!title && !content) {
      message.error('标题和正文不可为空！')
      return
    }
    const queryInfo = {
      title, content
    }
    await dispatch(sendAnnounceAction(queryInfo))
    await dispatch(getAnnounceAction())
    form.resetFields()
  }
  return (
    <SendAccounceWrapper>
      <div className='send-announce'>
        <Form name='send' form={form}>
          <Form.Item label="通知标题" name='title'>
            <Input placeholder='请输入标题'/>
          </Form.Item> 
          <Form.Item label="通知正文" name='content'>
            <TextArea placeholder='请输入正文' style={{ height: '300px' }} />
          </Form.Item> 
        </Form>
        <div className='handle'>
          <Button onClick={() => reset()}>重置</Button>
          <Button type='primary' onClick={() => submit()}>提交</Button>
        </div>
      </div>
    </SendAccounceWrapper>
  )
})

export default SendAnnounce