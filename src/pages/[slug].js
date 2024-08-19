import { useState } from 'react'
import Image from 'next/image'
// import utils
import { formatNutritionData } from '@/utils/formatNutritionData'

// Import components
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

  // nutrition data
  const formattedNutritionData = formatNutritionData(nutritionData)

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
  const [selectedSize, setSelectedSize] = useState(itemDetails.sizes[0])
  const [nutritionData, setNutritionData] = useState(formattedNutritionData)

  // add handleSizeChange function
  const handleSizeChange = async (size) => {
    const sizeId = size.sizeId
    const itemId = itemDetails.item_id

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/nutrition/${itemId}/${sizeId}`
      )
      const newNutritionData = await res.json()
      const formattedNewNutritionData = formatNutritionData(newNutritionData)

      // set values
      setNutritionData(formattedNewNutritionData)
      setSelectedSize(size)
    } catch (error) {
      console.error('Failed to fetch nutrition data:', error)
    }
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
            <p className="text-lg text-gunmetal">{itemDetails.description}</p>
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
                  onClick={() => handleSizeChange(size)}
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
        <ItemInfoList title="Nutrition Information" data={nutritionData} />
      </div>
    </div>
  )
}

export default ItemPage
