import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HealthyCardWrapper } from './style'
import { getTeacherInfoAction, getTodaySelfCardAction, setHealthyCardCardAction } from '@/store/main/healthy-card/thunk'
import { Card, Form, Input, Button, Select, InputNumber } from 'antd'
const { Option } = Select

const HealthyCard = memo(() => {
  const dispatch = useDispatch()
  const [isWrite, setIsWrite] = useState(false)

  const formRef = useRef()

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  useEffect(() => {
    dispatch(getTeacherInfoAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTodaySelfCardAction())
  }, [dispatch])
  
  const { teacInfo, selfCard } = useSelector(state => ({
    teacInfo: state.main.healCard.teacInfo,
    selfCard: state.main.healCard.selfCard
  }), shallowEqual)

  useEffect(() => {
    if(selfCard[0]) {
      setIsWrite(true)
    } else {
      setIsWrite(false)
    }
  }, [selfCard])

  const cardSumbit = () => {
    const cardInfo = formRef.current.getFieldsValue()
    dispatch(setHealthyCardCardAction(cardInfo))
    dispatch(getTodaySelfCardAction())
    window.location.reload();
  }

  return (
    <HealthyCardWrapper>
      <div className='show_info'>
        <Card className='teac_card' hoverable>
          <h3>辅导员信息</h3>
          <p>姓名：{teacInfo.username}</p>
          <p>手机号码：{teacInfo.phonenumber}</p>
          <p>邮箱：{teacInfo.mailbox}</p>
        </Card>
        <Card className='statu' hoverable style={isWrite ? { backgroundColor: "#52A551" } : { backgroundColor: '#CB4449' }}>
          <h3>{isWrite ? '今日已填报' : '今日未填报'}</h3>
        </Card>
        <Card className='tips' hoverable>
          <h3>温馨提示</h3>
          <p>请同学们每日按时填报健康卡</p>
          <p>如有什么特殊状况可联系辅导员</p>
        </Card>
      </div>
      <div className='set-card'>
        <Card title='今日健康卡填报'>
          <Form {...layout} ref={formRef}>
          <Form.Item name='temperature' label='今日体温' key='temperature'>
            <InputNumber min='32.0' max='45.0' controls='false' step='0.1'/>
          </Form.Item>
          <Form.Item name='address' label='当天居住地址' key='addredd'>
            <Input />
          </Form.Item>
          <Form.Item name='healthy_code' label='健康码颜色' key='healthy_code'>
            <Select>
              <Option value='0'>绿色</Option>
              <Option value='1'>黄色</Option>
              <Option value='2'>红色</Option>
            </Select>
          </Form.Item>
          <Form.Item name='go_add' label='近14天是否去过中高风险地区' key='go_add'>
            <Select>
              <Option value='0'>否</Option>
              <Option value='1'>是</Option>
            </Select>
          </Form.Item>
          <Form.Item name='exposure' label='近14天是否接触过接诊/红码人员' key='exposure'>
            <Select>
              <Option value='0'>否</Option>
              <Option value='1'>是</Option>
            </Select>
          </Form.Item>
          <Form.Item name='leave_out' label='今日是否离开学校' key='leave_out'>
            <Select>
              <Option value='0'>否</Option>
              <Option value='1'>是</Option>
            </Select>
          </Form.Item>
          <Form.Item name='detection' label='今日是否检测过核酸' key='detection'>
            <Select>
              <Option value='0'>否</Option>
              <Option value='1'>是</Option>
            </Select>
          </Form.Item>
          <Form.Item name='vaccines' label='疫苗接种情况' key='vaccines'>
            <Select>
              <Option value='0'>未接种</Option>
              <Option value='1'>已接种一针</Option>
              <Option value='2'>已接种两针</Option>
              <Option value='3'>已接种三针</Option>
            </Select>
          </Form.Item>
          <Form.Item name='mask' label='口罩是否充足' key='mask'>
            <Select>
              <Option value='0'>否</Option>
              <Option value='1'>是</Option>
            </Select>
          </Form.Item>
          <Form.Item name='disinfect' label='消毒用品是否充足' key='disinfect'>
            <Select>
              <Option value='0'>否</Option>
              <Option value='1'>是</Option>
            </Select>
          </Form.Item>
          <Form.Item name='mask_num' label='口罩剩余数量' key='mask_num'>
            <InputNumber min='0'/>
          </Form.Item>
          </Form>
          <Button type='primary' 
                  style={{float: 'right'}} 
                  disabled={isWrite}
                  onClick={ () => cardSumbit() }>提交</Button>
        </Card> 
      </div>
    </HealthyCardWrapper>
  )
})

export default HealthyCard