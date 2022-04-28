import ccRequest from '@/service'

// 所有学生
export function getStuByClass() {
  return ccRequest.get({
    url: '/admin/getstubyclass'
  })
}

// 修改学生信息
export function editStuInfo(queryInfo) {
  return ccRequest.patch({
    url: '/users/upuserdata',
    data: queryInfo
  })
}

// 删除学生
export function delStu(u_number) {
  return ccRequest.delete({
    url: `/users/deluserdata?u_number=${u_number}`
  })
}

// 根据学号筛选学生信息
export function getStuInfo(u_number) {
  return ccRequest.post({
    url: '/users/getinfobynum',
    data: u_number
  })
}

// 上传文件
export function upload(file) {
  return ccRequest.post({
    url: '/file/upload',
    data: file
  })
}

// 添加单个学生
export function addSingleStu(queryInfo) {
  return ccRequest.post({
    url: '/users/setuser',
    data: queryInfo
  })
}