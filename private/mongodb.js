const dotenv = require('dotenv')
const MongoClient = require('mongodb')

let uri, dbName
if (process.env.MONGODB_DB) {
  uri = process.env.MONGODB_URI
  dbName = process.env.MONGODB_DB
} else {
  // Read from the raw file in standalone mode
  const env = dotenv.config()
  uri = env.parsed.MONGODB_URI
  dbName = env.parsed.MONGODB_DB
}

let cachedClient = null
let cachedDb = null

const connectToDatabase = async () => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}

module.exports = {
  connectToDatabase,
  uri
}
