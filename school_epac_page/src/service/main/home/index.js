import ccRequest from '@/service'

// 今日健康卡
export function getTodayCardRequest(payload) {
  return ccRequest.post({
    url: '/admin/nowdaycardpage',
    data: payload
  })
}

// 14天内去过中高风险
export function getMedAndHigh() {
  return ccRequest.get({
    url: '/admin/gethigh'
  })
}

// 今天核酸人数
export function getDetection() {
  return ccRequest.get({
    url: '/admin/getdetection'
  })
}

// 今天离开学校人数
export function getLeaveOut() {
  return ccRequest.get({
    url: '/admin/getleaveout'
  })
}
