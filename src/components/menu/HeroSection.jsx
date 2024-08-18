import React from 'react'

const HeroSection = () => {
  return (
    // takes full available width
    <div className="p-4 h-[calc(100vh-6rem)] grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-3 row-span-5 bg-primary rounded-lg">First</div>
      <div className="col-span-2 row-span-3 bg-secondary rounded-lg">
        Second
      </div>
      <div className="col-span-2 row-span-2 bg-accent rounded-lg">Third</div>
    </div>
  )
}

export default HeroSection
