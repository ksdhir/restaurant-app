import React from 'react'

import { IoIosHeartEmpty } from 'react-icons/io'
import Button from '../common/Button'
import AppLink from '../common/AppLink'

const HeroSection = () => {
  return (
    // takes full available width
    <div className="p-4 h-[calc(100vh-6rem)] grid grid-cols-5 grid-rows-5 gap-4">
      <div
        className="col-span-3 row-span-5 bg-primary rounded-lg p-16
        flex flex-col gap-4 justify-center
      "
      >
        <IoIosHeartEmpty className="w-12 h-12" />
        <h1 className="text-5xl">
          Discover the Authentic Taste of Indian Cuisine
        </h1>
        <p>
          At our restaurant, we invite you to discover the
          <strong> authentic </strong> taste of
          <strong> Indian cuisine</strong>, where each dish is crafted with
          <strong> traditional recipes </strong>
          and the finest ingredients to bring you the true essence of India's
          rich culinary heritage.
        </p>
        {/* cta buttons */}
        <div className="flex flex-row justify-evenly">
          <AppLink backgroundColor="background">Reserve Table</AppLink>
          <AppLink backgroundColor={'primary'} borderColor={'secondary'}>
            Order Online
          </AppLink>
        </div>
      </div>
      <div className="col-span-2 row-span-3 bg-secondary rounded-lg text-background">
        Second
      </div>
      <div className="col-span-2 row-span-2 bg-accent rounded-lg">Third</div>
    </div>
  )
}

export default HeroSection
