import React from 'react'
import ArrowBtn from '@/components/common/ArrowBtn'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
import { useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HeroSecondary = ({ featuredItems }) => {
  const swiperRef = useRef(null)
  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }
  console.log(featuredItems)
  return (
    <div className="p-8 max-sm:p-4 flex flex-col gap-3 h-full justify-evenly">
      {/* secondary header */}
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold bg-primary text-secondary p-2 rounded-lg">
          Featured
        </h2>

        <div className="self-center flex flex-row gap-2">
          <ArrowBtn variant="two" onClick={() => swiperRef.current.slidePrev()}>
            Left
          </ArrowBtn>
          <ArrowBtn
            variant="two"
            direction={'right'}
            onClick={() => swiperRef.current.slideNext()}
          >
            Right
          </ArrowBtn>
        </div>
      </div>
      {/* swiper component */}
      <div className="">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {featuredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                href={
                  item.name.toLowerCase().replace(/\s/g, '-') + `-${item.id}`
                }
              >
                <div className="group hover:cursor-pointer overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HeroSecondary
