// import components
import HeroLayout from '@/components/layout/HeroLayout'

// import menu hero components
import HeroPrimary from '@/components/menu/HeroPrimary'
import HeroSecondary from '@/components/menu/HeroSecondary'
import HeroTertiary from '@/components/menu/HeroTertiary'
import ItemsList from '@/components/menu/ItemsList'

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
      <HeroLayout
        HeroPrimary={<HeroPrimary />}
        HeroSecondary={<HeroSecondary />}
        HeroTertiary={<HeroTertiary />}
      />
      {/* Slider listed components */}
      <div className="my-8 flex flex-col gap-10">
        {items.map((categoryObj) => {
          return <ItemsList categoryObj={categoryObj}  />
        })}
      </div>
    </>
  )
}
