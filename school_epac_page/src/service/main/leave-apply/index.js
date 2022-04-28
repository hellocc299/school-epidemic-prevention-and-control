import ccRequest from '@/service'

export function leaveApply(queryInfo) {
  return ccRequest.post({
    url: '/student/setleave',
    data: queryInfo
  })
}

export function getLeaveList() {
  return ccRequest.post({
    url: '/student/getleavelist'
  })
}