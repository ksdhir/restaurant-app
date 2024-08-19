import React from 'react'

import { IoIosHeartEmpty } from 'react-icons/io'
import AppLink from '../common/AppLink'

const HeroPrimary = () => {
  return (
    <div className="h-full border-2 border-secondary rounded-lg">
      <div className="p-16 max-sm:p-8 flex flex-col gap-4 justify-center mx-auto h-full xl:w-[80%]">
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
    </div>
  )
}

export default HeroPrimary
