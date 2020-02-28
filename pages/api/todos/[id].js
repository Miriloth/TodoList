import pool from '../../../lib/db';

export default async (req, res) => {
  if(req.method === 'GET') {
    const {query: { id }} = req;
    const todoData = await pool.query(`SELECT * FROM todos WHERE id=${id}`);
    const todo = todoData.rows[0];

    res.status(200).json(todo);
  }
}
