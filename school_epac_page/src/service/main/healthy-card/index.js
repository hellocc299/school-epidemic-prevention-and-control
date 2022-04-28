import ccRequest from '@/service'

export function getTeacherInfo() {
  return ccRequest.get({
    url: '/student/getteacher'
  })
}

export function getTodaySelfCard() {
  return ccRequest.get({
    url: '/student/gethealcard'
  })
}

export function setHealthyCard(cardInfo) {
  return ccRequest.post({
    url: '/common/sethealth',
    data: cardInfo
  })
}