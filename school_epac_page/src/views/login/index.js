import React, { memo } from 'react'
import { LoginWrapper } from './style'
import LoginAccount from './cpns/login-account'

const Login = memo(() => {
  return (
      <LoginWrapper>
        <LoginAccount/>
      </LoginWrapper>
  )
})

export default Login