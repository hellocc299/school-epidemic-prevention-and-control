const connection = require("../app/database")
const errorType = require("../contants/error-type")

class TeacherService {
  // 分发通知
  async announce(ctx, u_id, title, classes, content) {
    try {
      const statement = `INSERT INTO announce (u_id, title, content, classes) VALUES (?, ?, ?, ?)`
      const result = await connection.execute(statement, [u_id, title, classes, content])
      return result
    } catch(err) {
      console.log(err);
      const error = errorType.SEND_ERROR
      return ctx.app.emit('error', error, ctx)
    }
  }
    // 添加通知到notice表中
  async setNotice(u_id, a_id, className) {
    try {
      const statement = `INSERT INTO notice (u_id, a_id, classes) VALUES (?, ?, ?)`
      const result = await connection.execute(statement, [u_id, a_id, className])
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async delNotice(a_id) {
    try {
      const statement1 = `DELETE FROM announce WHERE a_id = ?`
      let result = await connection.execute(statement1, [a_id])
      const statement2 = `DELETE FROM notice WHERE a_id = ?`
      result += await connection.execute(statement2, [a_id])
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async getNoticeById(a_id) {
    try {
      const statement = `SELECT title FROM announce WHERE a_id = ?`
      const result = await connection.execute(statement, [a_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getAllLeaveCount(classes) {
    try {
      const statement = `SELECT COUNT(*) AS count FROM leave_out WHERE classes = ?`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getAllLeaveList(classes, pageNum, currPage) {
    try {
      const statement = `SELECT * FROM leave_out WHERE classes = ? LIMIT ?, ?`
      const result = await connection.execute(statement, [classes, pageNum, currPage])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getStuInfoById(u_id) {
    try {
      const statement = `SELECT username, u_number FROM user WHERE u_id = ?`
      const result = await connection.execute(statement, [u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getNotApproved(classes) {
    try {
      const statement = `SELECT * FROM leave_out WHERE classes = ? AND state = 0`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async upLeaveState(l_id, upState) {
    try {
      const statement = `UPDATE leave_out SET state = ? WHERE l_id = ?`
      const result = await connection.execute(statement, [upState, l_id])
      return result
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new TeacherService()