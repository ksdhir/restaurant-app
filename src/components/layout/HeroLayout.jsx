import React from 'react'

const HeroLayout = ({ HeroPrimary, HeroSecondary, HeroTertiary }) => {
  return (
    <div
      className={`grid grid-cols-6 grid-rows-11 md:grid-rows-8 lg:grid-cols-5 lg:grid-rows-5 gap-4`}>
      <div
        className="
        col-span-6 row-span-5
        lg:col-span-3 lg:row-span-5 bg-primary rounded-lg"
      >
        {HeroPrimary}
      </div>
      <div className="col-span-6 row-span-3 md:col-span-3 lg:col-span-2 lg:row-span-3 bg-secondary rounded-lg text-background ">
        {HeroSecondary}
      </div>
      <div className="col-span-6 row-span-3 md:col-span-3 lg:col-span-2 lg:row-span-2 bg-accent rounded-lg">
        {HeroTertiary}
      </div>
    </div>
  )
}

export default HeroLayout
