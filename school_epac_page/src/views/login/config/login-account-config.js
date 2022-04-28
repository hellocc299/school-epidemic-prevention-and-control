export const usernameRule = [
  {
    required: true,
    message: '用户名不可为空！'
  }
]

export const passwordRule = [
  {
    required: true,
    message: '密码不可为空！'
  },
  {
    pattern: /^([a-zA-Z0-9]|[._]){6,15}$/,
    message: '密码为6-15位包含字母和数字可包含_和.'
  }
]

export const typeRule = [
  {
    required: true,
    message: '类型不可为空！'
  }
]