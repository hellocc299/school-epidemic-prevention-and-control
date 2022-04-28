import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSingleStuAction, getStuByClassAction } from '@/store/main/stu-manage/thunk'
import { options } from '@/base-ui/cascader/config'
import { Input, Button, Form, Modal, Select, Cascader } from 'antd'
import { useForm } from 'antd/lib/form/Form'
const { Option } = Select

const CCInsert = memo((props) => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalForm] = useForm()
  const handleOk = async () => {
    const queryInfo = modalForm.getFieldsValue()
    queryInfo.type = props.type
    await dispatch(addSingleStuAction(queryInfo))
    await dispatch(props.action)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const insert = () => {
    setIsModalVisible(true);
  }
  return (
    <div className='insert'>
      <Button type="primary" className='insert' onClick={() => insert()}>单个添加</Button>
      <Modal title="添加用户"
             visible={isModalVisible} 
             onOk={() => handleOk()} 
             onCancel={() => handleCancel()}
             forceRender>
        <Form name='insert' form={modalForm}>
          <Form.Item label="班级" name='classes'>
            <Input placeholder='请输入班级' />
          </Form.Item>
          <Form.Item label="编号" name='u_number'>
            <Input placeholder='请输入编号' />
          </Form.Item>
          <Form.Item label="姓名" name='username'>
            <Input placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item label="邮箱" name='mailbox'>
            <Input placeholder='请输入邮箱' />
          </Form.Item>
          <Form.Item label="籍贯" name='address'>
            <Cascader options={options}
                      allowClear/>
          </Form.Item>
          <Form.Item label="性别" name='sex' initialValue='男'>
            <Select>
              <Option value='男'>男</Option>
              <Option value='女'>女</Option>
            </Select>
          </Form.Item>
          <Form.Item label="手机" name='phonenumber'>
            <Input placeholder='请输入手机号码' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
})

export default CCInsert