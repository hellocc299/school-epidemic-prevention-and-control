const connection = require("../app/database")

class FileService {
  async updateAvatar(filename, mimetype, size, u_id) {
    try {
      const statement = `UPDATE avatar SET filename = ?, mimetype = ?, size = ? WHERE u_id = ?`
      const [result] = await connection.execute(statement, [filename, mimetype, size, u_id])
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async setAvatar(filename, mimetype, size, u_id) {
    try {
      const statement = `INSERT INTO avatar (u_id, filename, mimetype, size) VALUES (?, ?, ?, ?)`
      const [result] = await connection.execute(statement, [u_id, filename, mimetype, size])
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async getAvatarByUserId(userId) {
    try {
      const statement = `SELECT * FROM avatar WHERE u_id = ?`
      const [result] = await connection.execute(statement, [userId])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new FileService()