import React from 'react'

import ItemCard from './ItemCard'

const Section = ({ category }) => {
  return (
    <section>
      <h2 className="text-2xl text-gunmetal font-bold mb-4">
        {category.categoryName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item) => (
          <ItemCard
            key={item.id}
            itemId={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
          />
        ))}
      </div>
    </section>
  )
}

export default Section
