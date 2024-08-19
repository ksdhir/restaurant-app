import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
import { useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ArrowBtn from '../common/ArrowBtn'

const ItemsList = ({ categoryObj }) => {
  const swiperRef = useRef(null)

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
          <h2 className="text-2xl font-bold">{categoryObj.categoryName}</h2>
          {/* Todo fix */}
          <p className="">Lorem ipsum dolor</p>
        </div>
        {/* Action Btns */}
        <div className="self-center flex flex-row gap-2">
          <ArrowBtn variant="one" onClick={() => swiperRef.current.slidePrev()}>
            Left
          </ArrowBtn>
          <ArrowBtn
            variant="one"
            direction={'right'}
            onClick={() => swiperRef.current.slideNext()}
          >
            Right
          </ArrowBtn>
        </div>
      </div>
      {/* swiper container */}
      <div className="mt-4">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {categoryObj.items.map((item) => (
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
                      <p className="font-bold self-end">${item.price}</p>
                    </div>
                    {/* card description */}
                    <p className="text-sm line-clamp-2">{item.description}</p>
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
