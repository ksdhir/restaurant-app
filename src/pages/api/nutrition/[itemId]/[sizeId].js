import pool from '@/../db/config'

export default async function handler(req, res) {
  // extract item id and size id
  const { itemId, sizeId } = req.query

  try {
    const [results] = await pool.query(
      `
      SELECT 
        calories,
        protein,
        total_carbs as carbs,
        total_fat as fat,
        sugars,
        sodium
      FROM Nutrition
      WHERE item_id = ? AND size_id = ?
    `,
      [itemId, sizeId]
    )

    if (results.length) {
      return res.status(200).json(results[0])
    } else {
      return res.status(404).json({ error: 'Nutrition information not found' })
    }
  } catch (error) {
    console.error('Error fetching nutrition information:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
