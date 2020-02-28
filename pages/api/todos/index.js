import pool from '../../../lib/db';

export default async (req, res) => {
  if (req.method === 'GET') {
    const todosData = await pool.query('SELECT * from todos');
    const todos = todosData.rows;

    res.status(200).json(todos);
  } else if (req.method === 'POST') {

  }
};
