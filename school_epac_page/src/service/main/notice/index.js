import ccRequest from '@/service'

export function getSelfNotice() {
  return ccRequest.get({
    url: '/student/getnotice'
  })
}

export function switchStatu(a_id) {
  return ccRequest.patch({
    url: '/student/editnoticestatu',
    data: a_id
  })
}