import { useState } from 'react'
import Image from 'next/image'

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
  const itemDetails = await res.json();

  // get nutrition data for first size

  const size = itemDetails.sizes[0].sizeId;
  const nutritionRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/nutrition/${id}/${size}`);
  const nutritionData = await nutritionRes.json();


  return {
    props: {
      itemDetails,
      nutritionData,
    },
  }
}

const ItemPage = ({ itemDetails, nutritionData }) => {
  const [selectedSize, setSelectedSize] = useState(itemDetails.sizes[0]) // Default to the first size

  console.log(nutritionData)

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
            <button
              key={size.sizeId}
              onClick={() => handleSizeChange(size)}
              className={`px-4 py-2 rounded-lg border transition-colors duration-300 text-left ${
                selectedSize.sizeId === size.sizeId
                  ? 'bg-coral text-white border-coral'
                  : 'bg-white text-gunmetal border-gray-300 hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row gap-4 items-center">
                <span className="font-semibold">{size.sizeLabel}</span>
                <span className="text-sm">${size.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl text-gunmetal font-semibold mb-4">
          Nutrition Information
        </h2>
        <div className="border rounded-lg p-4 bg-white shadow-md">
          {/* Dummy data for now; this will change based on size in the future */}
          <p>
            <strong>Calories:</strong> 400
          </p>
          <p>
            <strong>Protein:</strong> 15g
          </p>
          <p>
            <strong>Carbohydrates:</strong> 40g
          </p>
          <p>
            <strong>Fat:</strong> 20g
          </p>
          <p>
            <strong>Sugars:</strong> 2g
          </p>
          <p>
            <strong>Sodium:</strong> 700mg
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItemPage
