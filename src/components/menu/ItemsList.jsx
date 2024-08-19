import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
import { useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ItemsList = () => {
  const swiperRef = useRef(null)

  const categoryName = 'Meals'
  const categoryDescription = 'The best burgers in town!'
  const items = [
    {
      id: 1,
      name: 'Burger',
      price: 10,
      imageUrl: '/images/chole-bhature.jpg',
      description: 'The best burger in town!',
    },
    {
      id: 2,
      name: 'Cheeseburger',
      price: 12,
      imageUrl: '/images/badam-milk.jpg',
      description: 'The best cheeseburger in town!',
    },
    {
      id: 3,
      name: 'Fries',
      price: 5,
      imageUrl: '/images/chole-bhature.jpg',
      description: 'The best fries in town!',
    },
    {
      id: 4,
      name: 'Soda',
      price: 3,
      imageUrl: '/images/badam-milk.jpg',
      description: 'The best soda in town!',
    },
    {
      id: 5,
      name: 'Fries',
      price: 5,
      imageUrl: '/images/chole-bhature.jpg',
      description: 'The best fries in town!',
    },
    {
      id: 6,
      name: 'Soda',
      price: 3,
      imageUrl: '/images/badam-milk.jpg',
      description: 'The best soda in town!',
    },
    {
      id: 7,
      name: 'Fries',
      price: 5,
      imageUrl: '/images/chole-bhature.jpg',
      description: 'The best fries in town!',
    },
    {
      id: 8,
      name: 'Soda',
      price: 3,
      imageUrl: '/images/badam-milk.jpg',
      description: 'The best soda in town!',
    },
  ]

  const breakpoints = {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }

  return (
    <div>
      {/* Items List Header */}
      <div className="flex flex-row justify-between">
        {/* Header description */}
        <div>
          <h2 className="text-2xl font-bold">{categoryName}</h2>
          <p className="">{categoryDescription}</p>
        </div>
        {/* Action Btns */}
        <div className="self-center">
          <button
            className="p-2 border border-red-500"
            onClick={() => swiperRef.current.slidePrev()}
          >
            Left
          </button>
          <button
            className="p-2 border border-red-500"
            onClick={() => swiperRef.current.slideNext()}
          >
            Right
          </button>
        </div>
      </div>
      {/* swiper container */}
      <div className="mt-2">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                href={
                  item.name.toLowerCase().replace(/\s/g, '-') + `-${item.id}`
                }
              >
                <div className="flex flex-col gap-4 group hover:cursor-pointer overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="p-2 flex flex-col gap-2 border-2 border-primary rounded-lg
              group-hover:bg-primary transition-colors duration-300"
                  >
                    {/* card title content */}
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="font-bold self-end">From $ {item.price}</p>
                    </div>
                    {/* card description */}
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ItemsList
