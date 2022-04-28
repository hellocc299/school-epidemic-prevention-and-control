const mysql = require("mysql2")
const config = require("./config")

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

connections.getConnection((err, conn) => {
  if(err) {
    console.log(err);
  }
})

module.exports = connections.promise()