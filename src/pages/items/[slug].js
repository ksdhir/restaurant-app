import { useState } from 'react'
import Image from 'next/image'

import ItemInfoList from '@/components/menu/ItemInfoList'
import Button from '@/components/common/Button'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`)
  const categories = await res.json()

  // create paths for each item to pre-render
  const nestedPaths = categories.map((category) =>
    category.items.map((item) => ({
      params: {
        slug: `${item.name.toLowerCase().replace(/ /g, '-')}-${item.id}`,
      },
    }))
  )

  const paths = nestedPaths.reduce(
    (acc, categoryPaths) => acc.concat(categoryPaths),
    []
  )

  return {
    paths,
    fallback: false, // 404 if not found.
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  // fetch item id
  const id = slug.split('-').pop()

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`)
  const itemDetails = await res.json()

  // get nutrition data for first size

  const size = itemDetails.sizes[0].sizeId
  const nutritionRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/nutrition/${id}/${size}`
  )
  const nutritionData = await nutritionRes.json()

  // Mapping for the display labels
  const labelMapping = {
    calories: 'Calories',
    protein: 'Protein',
    carbs: 'Carbohydrates',
    fat: 'Fat',
    sugars: 'Sugars',
    sodium: 'Sodium',
  }

  const formattedNutritionData = Object.keys(nutritionData).map((key) => {
    return {
      label: labelMapping[key],
      value: `${nutritionData[key]} ${key === 'calories' ? 'kcal' : 'g'}`,
    }
  })

  const formattedIngredients = itemDetails.ingredients.map((ingredient) => {
    return {
      label: ingredient.ingredient_name,
      value: ingredient.allergens.join(', '),
    }
  })

  return {
    props: {
      itemDetails,
      formattedNutritionData,
      formattedIngredients,
    },
  }
}

const ItemPage = ({
  itemDetails,
  formattedNutritionData,
  formattedIngredients,
}) => {
  const [selectedSize, setSelectedSize] = useState(itemDetails.sizes[0]) // Default to the first size

  // Placeholder function to handle size change (you'll later fetch nutrition data based on this)
  const handleSizeChange = (size) => {
    setSelectedSize(size)
    // Placeholder: Add your logic to fetch new nutrition data here
    console.log(`Selected size: ${size.sizeLabel}`)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-center">
        <Image
          src={itemDetails.image_url}
          alt={itemDetails.item_name}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>

      <h1 className="text-3xl text-gunmetal mt-6 mb-4">
        {itemDetails.item_name}
      </h1>

      <p className="text-lg text-gunmetal mb-4">{itemDetails.description}</p>

      <div className="mt-6">
        <h2 className="text-2xl text-gunmetal font-semibold mb-4">
          Available Sizes
        </h2>
        <div className="flex space-x-4">
          {itemDetails.sizes.map((size) => (
            <Button
              isSelected={selectedSize.sizeId === size.sizeId}
              key={size.sizeId}
            >
              <div className="flex flex-row gap-4 items-center">
                <span className="font-semibold">{size.sizeLabel}</span>
                <span className="text-sm">${size.price}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        <ItemInfoList
          title="Ingredient and Allergens"
          data={formattedIngredients}
        />
        <ItemInfoList
          title="Nutrition Information"
          data={formattedNutritionData}
        />
      </div>
    </div>
  )
}

export default ItemPage
