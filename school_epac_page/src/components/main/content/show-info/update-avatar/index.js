import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import localCache from '@/utils/cache'
import { uploadAction, editPwdAction } from '@/store/main/show-info/thunk'
import { getSelfInfoAction } from '@/store/login/thunk'
import { rules } from './config'
import { useForm } from 'antd/lib/form/Form'
import { UpdataAvatarWrapper } from './style'
import { Avatar, Card, Button, Upload, message, Modal, Form, Input } from 'antd'
import { UserOutlined, UploadOutlined, LoginOutlined, EditOutlined } from '@ant-design/icons'

const UpdateAvatar = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSelfInfoAction())
  }, [dispatch])
  const selfInfo = useSelector(state => state.login.selfInfo, shallowEqual)

  const uploadProps = {
    showUploadList: false,
    accept: ".jpg, .jpeg, .png",
    beforeUpload: file => {
      const isImg = file.type === ('image/jpeg'||'image/jpg'||'image/png')
      if(!isImg) {
        message.error("必须上传格式为[jpeg,jpg,png]的图片！")
      }
      return isImg || Upload.LIST_IGNORE
    },
    name: 'avatar',
    customRequest: (data) => {
      const formData = new FormData()
      formData.append('avatar', data.file)
      dispatch(uploadAction(formData))
      dispatch(getSelfInfoAction())
    }
  }

  const [form] = useForm()

  const handleOk = async () => {
    const oldPwd = form.getFieldValue('oldPwd')
    const newPwd = form.getFieldValue('newPwd')
    const confirmPwd = form.getFieldValue('confirmPwd')
    if(newPwd !== confirmPwd) {
      message.error('两次密码输入不一样！')
    } else {
      await dispatch(editPwdAction({ oldPwd, newPwd }))
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const editPwd = () => {
    setIsModalVisible(true);
  }
  return (
    <UpdataAvatarWrapper>
      <div className='show-avatar'>
        <Card className='avatar'>
            <span><Avatar src={selfInfo.avatar_url} 
                          icon={<UserOutlined />}
                          size={70} /></span>
            <span className='username'>{`${selfInfo.username}的个人信息`}</span>
            <span className='operate'>
              <Button type='primary' 
                      icon={<EditOutlined />} 
                      style={{ height: '40px', marginRight: '5px' }}
                      onClick={() => editPwd()}>修改密码</Button>
              <Modal title="修改密码" 
                     visible={isModalVisible} 
                     onOk={handleOk} 
                     onCancel={handleCancel}
                     okText='确认'
                     cancelText='取消'>
                <Form form={form} name='editPwd'>
                  <Form.Item label='请输入旧密码' name='oldPwd' rules={rules} validateTrigger={'onBlur'}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label='请输入新密码' name='newPwd' rules={rules} validateTrigger={'onBlur'}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label='再次确认密码' name='confirmPwd' rules={rules} validateTrigger={'onBlur'}>
                    <Input.Password />
                  </Form.Item>
                </Form>
              </Modal>
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />} type='primary' style={{ height: '40px' }}>上传头像</Button>
              </Upload>
            </span>
        </Card>
      </div>
    </UpdataAvatarWrapper>
  )
})

export default UpdateAvatar