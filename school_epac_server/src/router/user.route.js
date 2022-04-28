const Router = require("koa-router") 
const userRouter = new Router({prefix: '/users'})

const {
  verifyLogin,
  verifySync
} = require("../middleware/user.middleware")

const {
  login,
  upPwd,
  setXlsxData,
  delUserdata,
  upUserdata,
  setUser,
  getUserInfoByNum
} = require("../controller/user.controller")

const {
  upAvatar,
  avatorInfo
} = require("../controller/file.controller")

const { 
  avatarHandle
} = require("../middleware/file.middleware")

// 登录逻辑
userRouter.post('/login', verifyLogin, login)
// 上传（更新）用户头像
userRouter.patch('/setavatar', verifySync, avatarHandle, upAvatar)
// 获取用户头像
userRouter.get('/:userId/avatar', avatorInfo)
// 修改密码
userRouter.patch('/uppwd', verifySync, upPwd)
// 用户增加(单个添加)
userRouter.post('/setuser', verifySync, setUser)
// 用户删除(同时清空该用户阅读记录)
userRouter.delete('/deluserdata', verifySync, delUserdata)
// 用户信息修改
userRouter.patch('/upuserdata', verifySync, upUserdata)
// 根据编号查询信息
userRouter.post('/getinfobynum', verifySync, getUserInfoByNum)


module.exports = userRouter