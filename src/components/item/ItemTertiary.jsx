import React from 'react'
import AppLink from '../common/AppLink'
import Button from '../common/Button'

const ItemTertiary = ({itemDetails, handleSizeChange, selectedSize}) => {
  
  return (
    <div className="p-8 max-sm:p-4 flex flex-col gap-3 h-full justify-evenly lg:justify-between">
      <div className="flex flex-row">
        <h2 className="text-2xl font-bold bg-primary text-secondary p-2 rounded-lg">
          Prices
        </h2>
      </div>

      <div className="grid grid-row-1 grid-cols-3 gap-2">
        {itemDetails.sizes.map((size) => (
          <Button
            isSelected={selectedSize.sizeId === size.sizeId}
            key={size.sizeId}
            onClick={() => handleSizeChange(size)}
          >
            <div className="flex flex-col items-center justify-between">
              <span className="font-semibold">{size.sizeLabel}</span>
              <span className="text-sm">${size.price}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ItemTertiary
