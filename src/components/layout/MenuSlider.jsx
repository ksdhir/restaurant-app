import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import AppLink from '../common/AppLink'


const MenuSlider = ({ isOpen, menuItems, isActive, closeMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-background transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h3 className="text-2xl font-bold text-secondary">
          <Link href="/">Indian Spice House</Link>
        </h3>
        <div className="flex-row gap-2">
          <button onClick={() => closeMenu()} className="focus:outline-none">
            <FiX className="w-8 h-8" />
          </button>
        </div>
      </div>
      {/* menu items */}
      <div className="container mx-auto mt-8">
        <nav className=" flex flex-col items-center space-y-6 ">
          {menuItems.map((item, idx) => (
            <AppLink
              key={idx}
              text={item.name}
              to={item.path}
              variant={isActive(item.path) ? 'headerSelectedNav' : 'headerNav'}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MenuSlider
