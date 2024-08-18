import React from 'react'
import Link from 'next/link'

// backgroundColor
// textColor
// border color

const AppLink = ({ children, to, backgroundColor, textColor="secondary", borderColor }) => {
  return (
    <Link href="/about">
      {/* conditional border color */}
      <span
        className={`px-4 py-2 rounded-lg 
          bg-${backgroundColor} 
          text-${textColor}
          font-semibold
          ${borderColor && `outline outline-2 outline-${borderColor}`}
          ${!borderColor && `outline outline-2 outline-${backgroundColor}`}
           transition-colors duration-300 box-border cursor-pointer
        `}
      >
        {children}
      </span>
    </Link>
  )
}

export default AppLink
