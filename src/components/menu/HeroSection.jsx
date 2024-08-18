import React from 'react'

import { IoIosHeartEmpty } from 'react-icons/io'
import Button from '../common/Button'
import AppLink from '../common/AppLink'

const HeroSection = () => {
  return (
    // takes full available width
    <div className="lg:h-[calc(100vh-6rem)] grid grid-cols-6 grid-rows-11 md:grid-rows-8  lg:grid-cols-5 lg:grid-rows-5 gap-4">
      <div
        className="
        col-span-6 row-span-5
        lg:col-span-3 lg:row-span-5 bg-primary rounded-lg p-16 max-sm:p-8
        flex flex-col gap-4 justify-center"
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
        <div className="mt-2 flex flex-row justify-evenly max-sm:flex-col gap-4">
          <AppLink variant="one" text="Reserve Table" to="/reserve"></AppLink>
          <AppLink variant="two" text="Order Online" to="/order"></AppLink>
        </div>
      </div>
      <div className=" col-span-6 row-span-3 md:col-span-3 lg:col-span-2 lg:row-span-3 bg-secondary rounded-lg text-background p-8 max-sm:p-4">
        Second
      </div>
      <div className="col-span-6 row-span-3 md:col-span-3 lg:col-span-2 lg:row-span-2 bg-accent rounded-lg  p-8 max-sm:p-4">
        Third
      </div>
    </div>
  )
}

export default HeroSection
