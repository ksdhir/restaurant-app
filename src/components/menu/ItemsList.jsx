import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ItemsList = () => {
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

  {
    /* tailwind breakpoints */
  }
  {
    /* screens: {
        sm: '480px',
        md: '600px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      }, */
  }

  {
    /* swiper breakpoints */
  }
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
          <button className="p-2 border border-red-500">Left</button>
          <button className="p-2 border border-red-500">Right</button>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border-2 border-gunmetal p-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-gunmetal">{item.name}</h3>
            <p className="text-gunmetal">${item.price}</p>
          </div>
        ))}
      </div> */}

      <Swiper
        breakpoints={breakpoints}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ItemsList
