// 日期转换
function dateFormat(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  if(month <= 9) {
    month = "0" + month
  }
  if(day <= 9) {
    day = "0" + day
  }
  date = year+'-'+month+'-'+day
  return date
}

// 获取今天开始时间
let startTime = new Date(new Date(new Date().toLocaleDateString()).getTime());
// 获取今天结束时间
let endTime = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);

// 获取当月开始和结束时间
let firstDate = new Date()
firstDate.setDate(1)
let endDate = new Date(firstDate)
endDate.setMonth(firstDate.getMonth() + 1)
endDate.setDate(0)
firstDate = new Date(firstDate)
endDate = new Date(endDate)

// 获取两周时间段(14d)
function getTwoLastWeek(date) {
  let twoLastWeek = new Date(date - 14 * 24 * 3600 * 1000)
  return twoLastWeek
}

module.exports = {
  dateFormat,
  startTime,
  endTime,
  firstDate,
  endDate,
  getTwoLastWeek
}