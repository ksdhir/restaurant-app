import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'

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
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  }

  return (
    <div>
      {/* Items List Header */}
      <div className="flex flex-row justify-between">
        {/* Header description */}
        <div>
          <h2 id={categoryObj.categoryName} className="text-2xl font-bold">
            {categoryObj.categoryName}
          </h2>
          {/* Todo fix */}
          <p className="">Lorem ipsum dolor</p>
        </div>
        {/* Action Btns */}
        <div className="self-center flex flex-row gap-2">
          <ArrowBtn
            variant="one"
            direction={'left'}
            onClick={() => swiperRef.current.slidePrev()}
          ></ArrowBtn>
          <ArrowBtn
            variant="one"
            direction={'right'}
            onClick={() => swiperRef.current.slideNext()}
          ></ArrowBtn>
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
                  <div className="relative w-full h-[200px] rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg group-hover:scale-110 transform transition-transform duration-300"
                    />
                  </div>
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
