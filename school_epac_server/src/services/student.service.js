const connection = require("../app/database")

class StudentService {
  async setLeave(leaveInfo) {
    try {
      console.log(leaveInfo);
      const statement = `INSERT INTO leave_out (u_id, reason, leave_type, start_time, end_time, classes) 
                         VALUES (?, ?, ?, ?, ?, ?)`
      const result = await connection.execute(statement, leaveInfo)
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async getNoticeCount(u_id) {
    try {
      const statement = `SELECT COUNT(*) AS count FROM notice WHERE u_id = ?`
      const result = await connection.execute(statement, [u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getNoticeList(u_id) {
    try {
      const statement = `SELECT n.n_id n_id, n.classes classes, n.statu, n.update_time update_time,
                         JSON_OBJECT('a_id', a.a_id, 'title', a.title, 'content', a.content, 'create_time', a.create_time) anno
                         FROM notice n LEFT JOIN announce a ON n.a_id = a.a_id WHERE n.u_id = ?`
      const result = await connection.execute(statement, [u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async editNoticeStatu(u_id, a_id) {
    try {
      const statement = `UPDATE notice SET statu = 1 WHERE u_id = ? AND a_id = ?`
      const result = connection.execute(statement, [u_id, a_id])
      return result 
    } catch(err) {
      console.log(err);
    }
  }
  async getTeaByClass(classes) {
    try {
      const statement = `SELECT * FROM user WHERE classes = ? AND type = 3`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(classes);
    }
  }
  async getSelfHealthCardById(u_id, startTime, endTime) {
    try {
      const statement = `SELECT * FROM healthy_card WHERE u_id = ? AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [u_id, startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getLeaveListById(u_id, pageNum, currPage) {
    try {
      const statement = `SELECT * FROM leave_out WHERE u_id = ? ORDER BY create_time`
      const result = await connection.execute(statement, [u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new StudentService()