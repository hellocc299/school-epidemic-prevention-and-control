import ccRequest from '../../service'

export function loginRequest(account) {
  return ccRequest.post({
    url: '/users/login',
    data: account
  })
}

export function getSelfInfo() {
  return ccRequest.get({
    url: '/common/getselfinfo'
  })
}