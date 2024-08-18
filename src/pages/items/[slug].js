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
    <div className="">
      <div className="flex flex-col lg:flex-row gap-8">
        <div>
          <Image
            src={itemDetails.image_url}
            alt={itemDetails.item_name}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="xl:basis-3/6 flex flex-col gap-8 justify-evenly lg:text-center">
          {/* item descrip */}
          <div>
            <h1 className="text-3xl text-gunmetal mb-4">
              {itemDetails.item_name}
            </h1>
            <p className="text-lg text-gunmetal">
              {itemDetails.description}
            </p>
          </div>

          {/* available sizes container */}
          <div className="flex flex-row max-md:flex-col lg:flex-col max-md:items-start items-center justify-between">
            <h2 className="text-2xl text-gunmetal font-semibold max-md:mb-6 lg:mb-6">
              Available Sizes
            </h2>
            <div className="flex max-sm:flex-col max-sm:gap-4 gap-2 xl:gap-4 lg:justify-evenly">
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
