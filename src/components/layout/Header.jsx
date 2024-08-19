import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router' // Import the useRouter hook

// import icons
import { FiMenu, FiX } from 'react-icons/fi'
import AppLink from '../common/AppLink'
import MenuSlider from './MenuSlider'

export const Header = () => {
  // State to control the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();

  // Menu items with their respective paths
  const menuItems = [
    { name: 'Menu', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  // Set the active path based on the current route
  const isActive = (path) => {
    const staticPaths = menuItems.map((item) => item.path)

    if (staticPaths.includes(router.asPath) && router.asPath === path) {
      return true
    } else if (router.route === '/[slug]' && router.asPath.startsWith(path)) {
      return true
    } else return false
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="text py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="text-2xl font-bold">
          <Link href="/">Indian Spice House</Link>
        </h3>
        {/* Desktop navbar */}
        <nav className="hidden md:flex flex-row gap-2">
          {menuItems.map((item, idx) => (
            <span key={idx}>
              
              <AppLink
                key={idx}
                text={item.name}
                to={item.path}
                variant={isActive(item.path) ? 'headerSelectedNav' : 'headerNav'}
              />
            </span>
          ))}
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      <MenuSlider isOpen={isOpen} isActive={isActive} closeMenu={closeMenu} menuItems={menuItems} />
    </header>
  )
}
