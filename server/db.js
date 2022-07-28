const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'purplehat',
  password: '03092001',
  port: 5432,
})

module.exports = pool;