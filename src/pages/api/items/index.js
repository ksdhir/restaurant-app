import pool from '@/../db/config';

export default async function handler(req, res) {
  try {
    // Query to fetch categories and their items
    const [results] = await pool.query(`SELECT
        c.id AS category_id,
        c.name AS category_name,
        c.description as category_description,
        i.id AS item_id, 
        i.name AS item_name,
        i.image_url,
        i.is_featured,
        i.description,
        (SELECT MIN(isz.price) 
          FROM ItemSizes isz 
          WHERE isz.item_id = i.id) AS item_price
      FROM Categories c
      JOIN Items i ON c.id = i.category_id
      ORDER BY c.id, i.id;`)

    const data = results.reduce((acc, row) => {
      // find if category exists
      const categoryIndex = acc.findIndex((cat) => cat.id === row.category_id)

      const item = {
        id: row.item_id,
        name: row.item_name,
        imageUrl: row.image_url,
        price: row.item_price,
        isFeatured: row.is_featured,
        description: row.description,
      }

      // append if exists else push new category
      if (categoryIndex !== -1) {
        acc[categoryIndex].items.push(item)
      } else {
        acc.push({
          id: row.category_id,
          categoryName: row.category_name,
          categoryDescription: row.category_description,
          items: [item],
        })
      }
      return acc
    }, [])
    
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching items:', error)
    res.status(400).json({ error: 'Something went wrong.' })
  }
}
