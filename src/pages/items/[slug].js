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
  const itemDetails = await res.json()

  return {
    props: {
      itemDetails,
    },
  }
}

const ItemPage = ({ itemDetails }) => {
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
        <ul className="space-y-4">
          {itemDetails.sizes.map((size) => (
            <li
              key={size.sizeId}
              className="flex justify-between border-b py-2"
            >
              <span>{size.sizeLabel}</span>
              <span className="font-bold text-coral">${size.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ItemPage
