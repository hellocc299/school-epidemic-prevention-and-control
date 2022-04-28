import React, { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { uploadAction, getStuByClassAction, getStuInfoAction } from '@/store/main/stu-manage/thunk'
import { Input, Button, Form, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const CCUpload = memo(() => {
  const dispatch = useDispatch()
  const uploadProps = {
    showUploadList: false,
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    beforeUpload: file => {
      const isXlxs = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      if(!isXlxs) {
        message.error("必须上传格式为xlxs的文件！")
      }
      return isXlxs || Upload.LIST_IGNORE
    },
    name: 'xlsx',
    customRequest: (data) => {
      const formData = new FormData()
      formData.append('xlsx', data.file)
      dispatch(uploadAction(formData))
      dispatch(getStuByClassAction())
    }
  }
  return (
    <div className='upload'>
      <Upload {...uploadProps}>
        <Button type="primary" icon={<UploadOutlined />}>上传用户</Button>
      </Upload>  
    </div>
  )
})

export default CCUpload