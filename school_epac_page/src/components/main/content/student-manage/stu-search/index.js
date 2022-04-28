import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { getStuByClassAction, getStuInfoAction } from '@/store/main/stu-manage/thunk'
import { StuSearchWrapper } from './style'
import CCUpload from './upload'
import CCInsert from '@/common/insert'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Button, Form } from 'antd'
import { useForm } from 'antd/lib/form/Form'
const { Search } = Input

const StuSearch = memo(() => {
  const [searchForm] = useForm()
  const dispatch = useDispatch()

  const onSearch = async (value) => {
    await dispatch(getStuInfoAction({u_number: value}))
  }

  const onReset = async () => {
    searchForm.resetFields()
    await dispatch(getStuByClassAction())
  }

  return (
    <StuSearchWrapper>
      <div className="search-data">
        <Form form={searchForm} name="search">
          <Form.Item name='u_number'>
            <Search enterButton="搜索"
                    placeholder="请输入编号"
                    prefix={<SearchOutlined />}
                    onSearch={(value) => onSearch(value)} />
          </Form.Item>   
        </Form>
        <Button type="primary" onClick={() => onReset()} className="reset">重置</Button>
      </div>
      <CCUpload />
      <CCInsert type='2' action={getStuByClassAction()} />
    </StuSearchWrapper>
  )
})

export default StuSearch