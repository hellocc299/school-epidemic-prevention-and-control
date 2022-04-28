const redis = require('redis')
const {
  REDIS_HOST,
  REDIS_PORT
} = require('../app/config')
const client = redis.createClient(REDIS_PORT, REDIS_HOST)

// 设置键值
let set = (key, value, expire, dbNum) => {
  if(typeof(value) === 'object') {
    value = JSON.stringify(value)
  }
  if(!dbNum) {
    dbNum = 0
  }

  return new Promise((resolve, reject) => {
    // 设置库
    client.select(dbNum, function(err) {
      if(err) {
        console.error('redis set 选库失败:' + err );
      } else {
        client.set(key, value, function(err, result) {
          if(err) {
            console.error('redis 插入失败:' + err)
          } else {
            if(!isNaN(expire) && expire > 0) {
              // 设置过期时间
              client.expire(key, parseInt(expire))
            }
            resolve(result)
          }
        })
      }
    })
  })
}

// 获取缓存
let get = async(key, dbNum) => {
  if(!dbNum) {
    dbNum = 0
  }
  return new Promise((resolve, reject) => {
    client.select(dbNum, function(err) {
      if(err) {
        console.error('redis set选库失败:' + err);
      } else {
        client.get(key, function(err, result) {
          if(err) {
            console.error('redis读取失败:' + err);
          } else {
            resolve(result)
          }
        })
      }
    })
  })
}

module.exports = {
  set,
  get
}