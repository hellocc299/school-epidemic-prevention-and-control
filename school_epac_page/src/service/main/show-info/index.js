import ccRequest from '@/service'

export function uploadAvatar(file) {
  ccRequest.patch({
    url: '/users/setavatar',
    data: file
  })
}

export function editPwd(queryInfo) {
  ccRequest.patch({
    url: '/users/uppwd',
    data: queryInfo
  })
}