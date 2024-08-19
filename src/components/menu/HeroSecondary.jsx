import React from 'react'
import ArrowBtn from '@/components/common/ArrowBtn'

const HeroSecondary = () => {
  return (
    <div className="p-8 max-sm:p-4">
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
      <div></div>
    </div>
  )
}

export default HeroSecondary
