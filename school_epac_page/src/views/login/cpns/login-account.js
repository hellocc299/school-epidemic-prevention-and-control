import React, { memo, useRef, useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginAccountWrapper } from './login-account-style'
import { Card, Form, Input, Radio, Button, Checkbox } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { usernameRule, passwordRule, typeRule } from '../config/login-account-config'
import { getLoginInfoAction } from '@/store/login/thunk'
import localCache from '@/utils/cache'


const LoginAccount = memo((props) => {  
  const [account, setAccount] = useState({})
  const [isInit, setInit] = useState(true)
  const [form] = useForm()

  const dispatch = useDispatch()
  const validate = () => {
    const value = form.getFieldsValue()
    setAccount(value)
  }
  
  useEffect(() => {
    if(isInit) {
      setInit(false)
    } else {
      dispatch(getLoginInfoAction(account))
    }
  }, [dispatch, account])
  const token = useSelector(state => (state.login.token), shallowEqual)
  const selfInfo = useSelector(state => (state.login.selfInfo), shallowEqual)
  if(token && selfInfo) {
    localCache.set('token', token)
    localCache.set('selfInfo', selfInfo)
    return(
      <Redirect to="/main" />
    )
  }


  return (
    <LoginAccountWrapper>
      <Card title='用户登录'>
        <Form labelCol={{
                      span: 6,
                    }}
                    wrapperCol={{
                      span: 32,
                    }}
              colon={false}
              form={form}>
          <Form.Item label="用户名" name='username' rules={usernameRule} validateTrigger={'onBlur'}>
            <Input />
          </Form.Item>
          <Form.Item label="密码" name='password' rules={passwordRule} validateTrigger={'onBlur'}>
            <Input.Password />
          </Form.Item>
          <Form.Item label="用户类型" name='type' rules={typeRule} validateTrigger={'onBlur'}>
            <Radio.Group name='type'>
              <Radio.Button value='1'>管理员</Radio.Button>
              <Radio.Button value='2'>学生</Radio.Button>
              <Radio.Button value='3'>老师</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block onClick={() => validate()}>立即登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </LoginAccountWrapper>
  )
})

export default LoginAccount