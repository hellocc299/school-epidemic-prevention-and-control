const connection = require("../app/database")

class CommonService {
  async getHealthDateByUid(u_id) {
    try {
      const statement = `SELECT create_time FROM healthy_card WHERE u_id = ?`
      const result = await connection.execute(statement, [u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
  async setHealth(cardContent) {
    try {
      const statement = `INSERT INTO healthy_card (u_id, classes, temperature, address, healthy_code, go_add, exposure, leave_out, detection, vaccines, mask, mask_num, disinfect) 
                         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      const result = await connection.execute(statement, cardContent)
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async getSelfInfo(u_id) {
    try {
      const statement = `SELECT * FROM user WHERE u_id = ?`
      const result = await connection.execute(statement, [u_id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new CommonService()