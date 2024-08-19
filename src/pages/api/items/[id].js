import pool from '@/../db/config'

export default async function handler(req, res) {
  // extract id from query
  const { id } = req.query

  try {
    const itemInfo = await pool.query(
      `SELECT 
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

    // validation for item
    if (itemInfo[0].length === 0) {
      return res.status(404).json({ error: 'Item not found' })
    }

    const ingredientsInfo = await pool.query(
      `SELECT
        ing.id AS ingredient_id,
        ing.name AS ingredient_name,
        ing.allergens AS allergens_info 
        FROM Ingredients ing
        JOIN ItemIngredients ii ON ii.ingredient_id = ing.id
        WHERE ii.item_id = ?
        GROUP BY ing.id;`,
      [id]
    )

    const sizes = itemInfo[0].map((row) => ({
      sizeId: row.size_id,
      sizeLabel: row.size_label,
      price: row.price,
    }))

    // ingredients and allergens
    const ingredients = ingredientsInfo[0]

    // construct response
    const result = {
      item_id: itemInfo[0][0].item_id,
      item_name: itemInfo[0][0].item_name,
      description: itemInfo[0][0].description,
      image_url: itemInfo[0][0].image_url,
      is_featured: itemInfo[0][0].is_featured,
      sizes: sizes,
      ingredients: ingredients,
    }

    res.status(200).json(result)
  } catch (error) {
    console.error('Error fetching item details:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
