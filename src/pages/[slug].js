import { useState } from 'react'
import Image from 'next/image'

// import utils
import { formatNutritionData } from '@/utils/formatNutritionData'

// Import components
import HeroLayout from '@/components/layout/HeroLayout'
import ItemPrimary from '@/components/item/ItemPrimary'
import ItemSeconday from '@/components/item/ItemSeconday'
import ItemInfoList from '@/components/menu/ItemInfoList'
import ItemTertiary from '@/components/item/ItemTertiary'

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

  const Imagee = () => {
    return (
      <div className=" bg-background flex flex-row justify-center">
        <Image
          src={itemDetails.image_url}
          alt={itemDetails.item_name}
          width={500}
          height={200}
          className="rounded-lg"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-[4.5rem]">
      <HeroLayout
        HeroPrimary={
          <ItemPrimary
            imageUrl={itemDetails.image_url}
            imageName={itemDetails.item_name}
          />
        }
        HeroSecondary={
          <ItemSeconday
            itemName={itemDetails.item_name}
            description={itemDetails.description}
          />
        }
        HeroTertiary={
          <ItemTertiary
            itemDetails={itemDetails}
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
          />
        }
      />
      <div className="flex flex-col gap-8">
        <ItemInfoList title="Nutrition Information" data={nutritionData} />
        <ItemInfoList
          title="Ingredient and Allergens"
          data={formattedIngredients}
        />
      </div>
    </div>
  )
}

export default ItemPage
