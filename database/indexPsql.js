const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: '5432',
  database: 'nike',
  password: 'psql'
});

module.exports = pool;