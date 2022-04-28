const connection = require("../app/database")
const errorType = require("../contants/error-type")

class AdminService {
  // 根据发放人获取今日所有通知
  async getTodAllNoticeByUid(u_id, classes, startTime, endTime) {
    try {
      const statement = `SELECT a_id FROM announce WHERE u_id = ? AND classes = ? AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [u_id, classes, startTime, endTime])
      const a_id = result[0]
      return a_id
    } catch(err) {
      console.log(err);
    }
  }
  // 拿到该班级所有的u_id
  async getUidByClasses(classes) {
    try {
      const statement = `SELECT u_id FROM user WHERE classes = ?`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  // 根据班级获取通知
  async getAnnounceIdByClasses(classes) {
    try {
      const statement = `SELECT a_id FROM announce WHERE classes = ?`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  // 跟据班级添加通知
  async notice() {
    try {
      const statement = `INSERT INTO notice (u_id, a_id, status, createtime) VALUES (?, ?, ?, ?)`
      const result = await connection.execute(statement, [u_id, title, content, createTime])
      return result
    } catch(err) {
      console.log(err);
      const error = errorType.SEND_ERROR
      return ctx.app.emit('error', error, ctx)
    }
  }
  async getAllNoticeCount() {
    try {
      const statement = `SELECT COUNT(*) AS count FROM notice`
      const result = await connection.execute(statement)
      return result[0]
    } catch(err) {
      console.log(err);
      const error = errorType.QUERY_ERROR
      return ctx.app.emit('error', error, ctx)
    }
  }
  async getNoticeList(classes, pageNum, currentPage) {
    try {
      const statement = `SELECT * FROM announce WHERE classes = ? LIMIT ?, ?`
      const result = await connection.execute(statement, [classes, pageNum, currentPage])
      return result[0]
    } catch(err) {
      console.log(err);
      const error = errorType.QUERY_ERROR
      return ctx.app.emit('error', error, ctx)
    }
  }
  async getCountByAid(a_id) {
    try {
      const statement = `SELECT COUNT(1) AS count FROM notice WHERE a_id = ? AND statu = 0;`
      const result = await connection.execute(statement, [a_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getUserCountByType(type) {
    try {
      const statement = `SELECT COUNT(*) AS count FROM user WHERE type = ?`
      const result = await connection.execute(statement, [type])
      return result[0]
    } catch(err) {
      console.log(err);
      const error = errorType.QUERY_ERROR
      return ctx.app.emit('error', error, ctx)
    }
  }
  async getUserListByType(type, pageNum, currentPage) {
    try {
      const statement = `SELECT * FROM user WHERE type = ? LIMIT ?, ?`
      const result = await connection.execute(statement, [type, pageNum, currentPage])
      return result[0]
    } catch(err) {
      console.log(err);
      const error = errorType.QUERY_ERROR
      return ctx.app.emit('error', error, ctx)
    }
  }
  async getHealthNowDayCount(startTime, endTime) {
    try {
      const statement = `SELECT COUNT(*) AS count FROM healthy_card WHERE create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  } 
  async getHealthNowDayCountByClasses(classes, startTime, endTime) {
    try {
      const statement = `SELECT COUNT(*) AS count FROM healthy_card WHERE classes = ? AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [classes, startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  } 
  async getHealthNowDayList(startTime, endTime, pageNum, currPage) {
    try {
      const statement = `SELECT * FROM healthy_card WHERE create_time BETWEEN ? AND ? LIMIT ?, ?`
      const result = await connection.execute(statement, [startTime, endTime, pageNum, currPage])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getHealthNowDayListByClasses(classes, startTime, endTime, pageNum, currPage) {
    try {
      const statement = `SELECT * FROM healthy_card WHERE classes = ? AND create_time BETWEEN ? AND ? LIMIT ?, ?`
      const result = await connection.execute(statement, [classes, startTime, endTime, pageNum, currPage])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getHealthNowDayByUid(startTime, endTime, u_id) {
    try {
      const statement = `SELECT * FROM healthy_card WHERE u_id = ? AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [u_id, startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getHealthMonthList(firstDate, endDate, pageNum, currPage) {
    try {
      const statement = `SELECT * FROM healthy_card WHERE create_time BETWEEN ? AND ? LIMIT ?, ?`
      const result = await connection.execute(statement, [firstDate, endDate, pageNum, currPage])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getAllHealth(pageNum, currPage) {
    try {
      const statement = `SELECT * FROM healthy_card LIMIT ?, ?`
      const result = await connection.execute(statement, [pageNum, currPage])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getHighCount(lastTwo, startTime) {
    try {
      const statement = `SELECT COUNT(*) as count FROM healthy_card WHERE go_add = 1 AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [lastTwo, startTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getHighCountByClasses(classes, lastTwo, startTime) {
    try {
      const statement = `SELECT COUNT(*) as count FROM healthy_card WHERE classes = ? AND go_add = 1 AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [classes, lastTwo, startTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getDetectionCount(startTime, endTime) {
    try {
      const statement = `SELECT COUNT(*) as count FROM healthy_card WHERE detection = 1 AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getDetectionCountByClasses(classes, startTime, endTime) {
    try {
      const statement = `SELECT COUNT(*) as count FROM healthy_card WHERE classes = ? AND detection = 1 AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [classes, startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getLeaveOutCount(startTime, endTime) {
    try {
      const statement = `SELECT COUNT(*) as count FROM healthy_card WHERE leave_out = 1 AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getLeaveOutCountByClasses(classes, startTime, endTime) {
    try {
      const statement = `SELECT COUNT(*) as count FROM healthy_card WHERE classes = ? AND leave_out = 1 AND create_time BETWEEN ? AND ?`
      const result = await connection.execute(statement, [classes, startTime, endTime])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async getStuList() {
    try {
      const statement = `SELECT * FROM user WHERE type = 2 ORDER BY classes `
      const result = await connection.execute(statement)
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  async getStuListByClasses(classes) {
    try {
      const statement = `SELECT * FROM user WHERE type = 2 AND classes = ?`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  async getStuCount() {
    try {
      const statement = `SELECT COUNT(*) as count FROM user WHERE type = 2 ORDER BY classes `
      const result = await connection.execute(statement)
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  async getStuCountByClasses(classes) {
    try {
      const statement = `SELECT COUNT(*) as count FROM user WHERE type = 2 AND classes = ?`
      const result = await connection.execute(statement, [classes])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  async getAllClasses() {
    try {
      const statement = `SELECT * FROM user WHERE type = 3`
      const result = await connection.execute(statement)
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new AdminService()