const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todos',
  password: 'docker',
  port: 5432,
});

module.exports = pool;
