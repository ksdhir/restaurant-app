import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const ArrowBtn = ({ onClick, direction, variant }) => {
  const variants = {
    one: 'w-5 h-5 text-secondary group-hover:text-background',
    two: 'w-5 h-5 text-primary group-hover:text-secondary',
  }
  const btnVariants = {
    one: 'p-2 border-2 border-secondary rounded-full group hover:bg-secondary',
    two: 'p-2 border-2 border-primary rounded-full group hover:bg-primary',
  }
  return (
    <button
      onClick={onClick}
      className={btnVariants[variant] ? btnVariants[variant] : ''}
    >
      {direction === 'right' && (
        <IoIosArrowForward
          className={variants[variant] ? variants[variant] : ''}
        />
      )}
      {direction === 'left' && (
        <IoIosArrowBack
          className={variants[variant] ? variants[variant] : ''}
        />
      )}
    </button>
  )
}

export default ArrowBtn
