import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Space, Button, Modal, Form, Input, Select, Cascader } from 'antd'
import { options } from '@/base-ui/cascader/config'
import { editUserInfoAction, delStuAction } from '@/store/main/stu-manage/thunk'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Option } = Select

function useTableConfig(config, action) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [initialValues, setInitialValues] = useState({})
  // 保存表单数据
  const [dataSource, setDataSource] = useState([])
  const formRef = useRef()
  const dispatch = useDispatch()

  const handleOk = async () => {
    let editValues = formRef.current.getFieldsValue()
    const queryInfo = {
      q_u_number: initialValues.n_u_number,
      n_u_number: editValues.n_u_number,
      n_username: editValues.n_username,
      n_phonenumber: editValues.n_phonenumber,
      n_mailbox: editValues.n_mailbox,
      n_sex: editValues.n_sex,
      n_address: editValues.n_address,
      n_classes: editValues.n_classes
    }
    await dispatch(editUserInfoAction(queryInfo))
    await dispatch(action())
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    formRef.current.resetFields()
  }

  useEffect(() => {
    formRef && formRef.current && formRef.current.resetFields()
  }, [initialValues])

  const editUser = (record) => {
    setIsModalVisible(true)
    setInitialValues(record)
  }

  const delUser = (record) => {
    dispatch(delStuAction(record.u_number))
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
      title: '班级',
      dataIndex: 'n_classes',
      key: 'n_classes',
      align: 'center'
    },
    {
      title: '编号',
      dataIndex: 'n_u_number',
      key: 'n_u_number',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'n_username',
      key: 'n_username',
      align: 'center'
    },
    {
      title: '性别',
      dataIndex: 'n_sex',
      key: 'n_sex',
      align: 'center'
    },
    {
      title: '居住地',
      dataIndex: 'n_address',
      key: 'n_address',
      align: 'center'
    },
    {
      title: '电话号码',
      dataIndex: 'n_phonenumber',
      key: 'n_address',
      align: 'center'
    },
    {
      title: '邮箱',
      dataIndex: 'n_mailbox',
      key: 'n_mailbox',
      align: 'center'
    },
    {
      title: "操作",
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      render: (text, record, index) => (
        <Space size="small">
          <Button icon={ <EditOutlined /> } type="primary" onClick={() => editUser(record)}>编辑</Button>
          <Modal visible={isModalVisible} 
                 onOk={() => handleOk()} 
                 onCancel={handleCancel}
                 title="修改信息"
                 okText="确认"
                 cancelText="取消"
                 forceRender={true}
                 mask={false}>
            <Form ref={formRef} 
                  initialValues={initialValues} 
                  labelCol={{
                    span: 5,
                  }}
                  name='form'>
              <Form.Item name="n_u_number" label="学号">
                <Input />
              </Form.Item>
              <Form.Item name="n_username" label="姓名">
                <Input/>
              </Form.Item>
              <Form.Item name="n_sex" label="性别">
                <Select>
                  <Option value="男">男</Option>
                  <Option value="女">女</Option>
                </Select>
              </Form.Item>
              <Form.Item name="n_classes" label="班级">
                <Input />
              </Form.Item>
              <Form.Item name="n_address" label="居住地">
                <Cascader options={options}
                          allowClear/>
              </Form.Item>
              <Form.Item name="n_phonenumber" label="手机号码">
                <Input />
              </Form.Item>
              <Form.Item name="n_mailbox" label="邮箱">
                <Input />
              </Form.Item>
            </Form>
          </Modal>
          <Button icon={ <DeleteOutlined /> } 
                  type="primary" 
                  onClick={() => delUser(record)}
                  style={ record.type === 3 ? { display: 'none' } : { display: 'block' } }>
                    删除
          </Button>
        </Space>
      )
    }
  ]

  useEffect(() => {
    let data = []
    for(let i = 0; i < config.length; i++) {
      const stuData = {
        type: config[i].type,
        n_u_number: config[i].u_number,
        n_username: config[i].username,
        n_sex: config[i].sex,
        n_classes: config[i].classes,
        n_address: config[i].address,
        n_phonenumber: config[i].phonenumber,
        n_mailbox: config[i].mailbox
      }
      data.push(stuData)
    }
    setDataSource(data)
  }, [config])
  return [columns, dataSource]
}

export default useTableConfig