import { useState } from 'react'
import Link from 'next/link'

// import icons
import { FiMenu, FiX } from 'react-icons/fi'

export const Header = () => {
  // State to control the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)

  // Menu items with their respective paths
  const menuItems = [
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="text-gunmetal py-8 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">
          <Link href="/">Indian Spice House</Link>
        </h1>
        {/* Desktop navbar */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span className="hover:text-coral">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FiMenu className="w-8 h-8 text-gunmetal" />
          </button>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-4 py-8">
          <h2 className="text-xl font-bold">Indian Spice House</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="focus:outline-none"
          >
            <FiX className="w-8 h-8 text-gunmetal" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span
                onClick={() => setIsOpen(false)}
                className="text-gunmetal text-lg hover:text-coral"
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
