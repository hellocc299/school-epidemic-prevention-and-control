import ccRequest from '@/service'

export function getAllClass() {
  return ccRequest.get({
    url: '/admin/getallclasses'
  })
}