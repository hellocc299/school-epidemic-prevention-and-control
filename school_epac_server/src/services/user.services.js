const connection = require("../app/database")

class UserService { 
  // 根据用户名查询用户
  async getUserByNameAndType(username, type) {
   try {
    const statement = `SELECT * FROM user WHERE username = ? AND type = ?`
    const result = await connection.execute(statement, [username, type])
    return result[0]
   } catch(err) {console.log(err);}
  }
  async setAvatarUrl(avatarUrl, u_id) {
    try {
      const statement = `UPDATE user SET avatar_url = ? WHERE u_id = ?`
      const result = await connection.execute(statement, [avatarUrl, u_id])
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async editPwd(u_id, newPwd) {
    try {
      const statement = `UPDATE user SET password = ? WHERE u_id = ?`
      const result = await connection.execute(statement, [newPwd, u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getAllUserInfo() {
    try {
      const statement = `SELECT * FROM user`
      const result = await connection.execute(statement)
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async inXlsxData(inXlsxArr) {
    try {
      let u_number, username, password, address, sex, classes, type, phonenumber, mailbox, statement
      for(let i = 1; i < inXlsxArr.length; i++) {
        u_number = inXlsxArr[i].u_number
        username = inXlsxArr[i].username
        password = inXlsxArr[i].password
        address = inXlsxArr[i].address
        sex = inXlsxArr[i].sex
        classes = inXlsxArr[i].classes
        type = inXlsxArr[i].type
        phonenumber = inXlsxArr[i].phonenumber
        mailbox = inXlsxArr[i].mailbox
        statement = `INSERT INTO user (u_number, username, password, phonenumber, mailbox, address, sex, classes, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
        await connection.execute(statement, [u_number, username, password, phonenumber, mailbox, address, sex, classes, type])
      } return true
    } catch(err) {
      console.log(err);
    }
  }
  async getUserInfoByNumber(u_number) {
    try {
      const statement = `SELECT * FROM user WHERE u_number = ?`
      const result = await connection.execute(statement, [u_number])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async delUserInTableByUid(u_id, tableName) {
    try {
      const statement = `DELETE FROM ${tableName} WHERE u_id = ?`
      const result = await connection.execute(statement, [u_id])
      return result
    } catch(error) {
      console.log(error);
    }
  }
  async upUserInfoByNumber(newUserInfo, u_number) {
    try {
      console.log(newUserInfo);
      const statement = `UPDATE user SET u_number = ?, username = ?, phonenumber = ?, mailbox = ?, sex = ?, address = ?, classes = ?, type = ? WHERE u_number = ?`
      const result = await connection.execute(statement, [...newUserInfo, u_number])
      return result
    } catch(error) {
      console.log(error);
    }
  }
  async getUserIdByNumber(u_number) {
    try {
      const statement = `SELECT u_id FROM user WHERE u_number = ?`
      const result = await connection.execute(statement, [u_number])
      return result[0]
    } catch(err) {

    }
  }
  async setUser(userInfo) {
    try {
      const statement = `INSERT INTO user (u_number, username, password, phonenumber, mailbox, address, sex, classes, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      const result = await connection.execute(statement, [...userInfo])
      return result
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new UserService()