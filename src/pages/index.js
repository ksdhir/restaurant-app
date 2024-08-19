import Head from 'next/head';

// import components
import HeroLayout from '@/components/layout/HeroLayout'

// import menu hero components
import HeroPrimary from '@/components/menu/HeroPrimary'
import HeroSecondary from '@/components/menu/HeroSecondary'
import HeroTertiary from '@/components/menu/HeroTertiary'
import ItemsList from '@/components/menu/ItemsList'

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`)
  const items = await res.json()

  const flattedItems = items.flatMap((obj) => obj.items)
  const featuredItems = flattedItems.filter((item) => item.isFeatured === 1)
  const categoryNames = items.map((obj) => obj.categoryName)
  return {
    props: {
      items,
      featuredItems,
      categoryNames,
    },
    revalidate: 10,
  }
}

export default function Home({ items, featuredItems, categoryNames }) {
  return (
    <>
      <Head>
        <title>Restaurant Menu: Indian Spice House</title>
      </Head>
      <HeroLayout
        variant="one"
        HeroPrimary={<HeroPrimary />}
        HeroSecondary={<HeroSecondary featuredItems={featuredItems} />}
        HeroTertiary={<HeroTertiary categoryNames={categoryNames} />}
      />
      {/* Slider listed components */}
      <div className="mt-8 flex flex-col gap-10">
        {items.map((categoryObj, idx) => {
          return <ItemsList key={idx} categoryObj={categoryObj} />
        })}
      </div>
    </>
  )
}
