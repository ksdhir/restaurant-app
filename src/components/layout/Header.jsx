import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router' // Import the useRouter hook

// import icons
import { FiMenu, FiX } from 'react-icons/fi'

export const Header = () => {
  // State to control the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)
  const [activePath, setActivePath] = useState('') // State to track the active path
  const router = useRouter() // Get the router object

  // Menu items with their respective paths
  const menuItems = [
    { name: 'Menu', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  // Set the active path based on the current route
  useEffect(() => {
    const splitPath = router.pathname.split('/')
    const selectedPath = splitPath[1]
    setActivePath('/' + selectedPath)
  }, [router.pathname])

  return (
    <header className="text-gunmetal py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="text-2xl font-bold">
          <Link href="/">Indian Spice House</Link>
        </h3>
        {/* Desktop navbar */}
        <nav className="hidden md:flex">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span
                className={`inline-block text-center w-[80px] ${
                  activePath === item.path
                    ? 'bg-accent text-background font-bold p-2 rounded-2xl'
                    : 'text-secondary hover:text-accent p-2'
                }`}
              >
                {item.name}
              </span>
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
