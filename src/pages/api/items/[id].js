import pool from '../../../../db/config'

export default async function handler(req, res) {
  // extract id from query
  const { id } = req.query 

  try {
    const [results] = await pool.query(
      `
      SELECT 
        i.id AS item_id,
        i.name AS item_name,
        i.description,
        i.image_url,
        i.is_featured,
        s.label AS size_label,
        s.id AS size_id,
        isz.price
      FROM Items i
      LEFT JOIN ItemSizes isz ON isz.item_id = i.id
      LEFT JOIN Sizes s ON s.id = isz.size_id
      WHERE i.id = ?
      ORDER BY s.id;`,
      [id]
    )

    if (results.length === 0) {
      return res.status(404).json({ error: 'Item not found' })
    }

    // extract all sizes and price
    const sizes = results.map((row) => ({
      sizeId: row.size_id,
      sizeLabel: row.size_label,
      price: row.price,
    }))

    const result = {
      item_id: results[0].item_id,
      item_name: results[0].item_name,
      description: results[0].description,
      image_url: results[0].image_url,
      is_featured: results[0].is_featured,
      sizes: sizes,
    }

    res.status(200).json(result)
  } catch (error) {
    console.error('Error fetching item details:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
