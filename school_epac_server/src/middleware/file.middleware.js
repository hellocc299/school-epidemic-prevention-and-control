const Multer = require("koa-multer")
const { AVATAR_PATH, XSLX_UPLOAD_PATH } = require("../contants/file-path")

// 上传头像保存的文件路径
const avatarUpload = Multer({
  dest: AVATAR_PATH
})

// 一次只能上传一张头像，还有上传的文件名
const avatarHandle = avatarUpload.single('avatar')

// 上传xsls文件保存路径
const xlsxUpload = Multer({
  dest: XSLX_UPLOAD_PATH,
  limits: {
    fieldSize: 10 * 1024 * 1024,
    preservePath: true
  }
})

// 最多上传1个
const xlsxHandle = xlsxUpload.single('xlsx')

module.exports = { avatarHandle, xlsxHandle }
