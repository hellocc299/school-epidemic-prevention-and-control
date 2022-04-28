const app = require("./src/app")
const config = require("./src/app/config")

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口启动成功`);
})

