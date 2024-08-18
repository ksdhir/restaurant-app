import React from 'react'
import Link from 'next/link'

const AppLink = ({ text, to, variant }) => {
  // use variants -> full dynamic names -> https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const variants = {
    one: 'bg-background border-background border-2 hover:bg-secondary hover:text-background hover:border-secondary',
    two: 'bg-primary border-secondary border-2 hover:border-background hover:text-background',
  }

  return (
    <Link href={to}>
      <span
        className={`
          inline-block px-4 py-2 rounded-lg font-semibold transition-colors duration-300 box-border cursor-pointer
          ${variants[variant] || 'text-secondary'}
        `}
      >
        {text}
      </span>
    </Link>
  )
}

export default AppLink
