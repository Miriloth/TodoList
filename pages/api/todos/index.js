const pool = require('../../../lib/db');

module.exports = async (req, res) => {
  const todosData = await pool.query('SELECT * from todos');
  const todos = todosData.rows;

  res.status(200).json(todos);
};
