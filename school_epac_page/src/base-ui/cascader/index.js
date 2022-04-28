import React, { memo } from 'react'
import { CCCascaderWrapper } from './style'
import { Cascader } from 'antd'
import { options, placeholder } from './config'

const CCCascader = memo(() => {
  return (
    <CCCascaderWrapper>
      <Cascader options={options}
                placeholder={placeholder}
                allowClear/>
    </CCCascaderWrapper>
  )
})

export default CCCascader