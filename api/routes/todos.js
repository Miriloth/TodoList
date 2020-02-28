const pool = require('../db');

module.exports = [
  {
    method: 'GET',
    path: '/todos',
    handler: async function (request, h) {
      const todosData = await pool.query('SELECT * from todos');
      const todos = todosData.rows;

      return h.response(todos).code(200)
    },
  },
];
