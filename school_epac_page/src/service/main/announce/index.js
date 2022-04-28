import ccRequest from '@/service'

export function sendAnnounce(queryInfo) {
  return ccRequest.post({
    url: '/teacher/announce',
    data: queryInfo
  })
}

export function getAnnounce(queryInfo) {
  return ccRequest.post({
    url: '/admin/getnotice',
    data: queryInfo
  })
}

export function delNotice(a_id) {
  return ccRequest.delete({
    url: '/teacher/delnotice',
    data: a_id
  })
}