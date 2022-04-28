import ccRequest from '@/service'

export function getUnhandleLeave() {
  return ccRequest.get({
    url: '/teacher/notapproved'
  })
}

// queryInfo: l_id, upState
export function editLeaveState(queryInfo) {
  return ccRequest.post({
    url: '/teacher/upleavestate',
    data: queryInfo
  })
}