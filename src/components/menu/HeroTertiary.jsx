import React from 'react'
import AppLink from '../common/AppLink'

const HeroTertiary = ({ categoryNames }) => {
  console.log(categoryNames)
  return (
    <div className="p-8 max-sm:p-4 flex flex-col gap-3 h-full justify-between">
      {/* secondary header */}
      <div className="flex flex-row">
        <h2 className="text-2xl font-bold bg-primary text-secondary p-2 rounded-lg">
          Explore
        </h2>
      </div>
      {/* navigation buttons */}
      <div className="grid grid-row-2 grid-cols-2 gap-4">
        {categoryNames.map((categoryName) => {
          return (
            <AppLink
              variant="one"
              text={categoryName}
              to={`#${categoryName}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HeroTertiary
