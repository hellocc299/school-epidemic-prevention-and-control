const elasticsearch = require("elasticsearch")
const {
  ES_HOST
} = require("./config")

const client = new elasticsearch.Client({
  host: ES_HOST,
  log: 'trace'
})

client.ping({
  requestTimeout: 3000
}, (err) => {
  if(err) {
    console.trace("elasticsearch is down!")
  } else {
    console.log("elasticsearch is success!");
  }
})

module.exports = client.Promise()