import Card from '@/components/menu/ItemCard'
import Section from '@/components/menu/Section'

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`)
  console.log(res)
  const items = await res.json()

  return {
    props: {
      items,
      res: `${process.env.NEXT_PUBLIC_API_URL}/api/items`,
    },
    revalidate: 10,
  }
}

export default function Home({ items }) {
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-gunmetal">
        Discover the Authentic Taste of Indian Spices
      </h1>
      <div className="mt-16 mb-16 flex flex-col gap-16">
        {items.map((category) => (
          <Section key={category.id} category={category} />
        ))}
      </div>
    </>
  )
}
