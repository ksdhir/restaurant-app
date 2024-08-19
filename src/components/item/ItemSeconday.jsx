import React from 'react'

const ItemSeconday = ({ itemName, description }) => {
  return (
    <div className="bg-background border-2 border-secondary rounded-lg p-8 max-sm:p-4 flex flex-col gap-3 h-full justify-center">
      <h1 className="text-5xl text-secondary">{itemName}</h1>
      <p className="text-xl text-secondary">{description}</p>
    </div>
  )
}

export default ItemSeconday
