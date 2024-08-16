import pool from '../../../db/config';

export default async function handler(req, res) {
  try {
    const [result] = await pool.query('SELECT 1');
    console.log(result)
    res.status(200).json({ message: 'Database connection is working!', result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}