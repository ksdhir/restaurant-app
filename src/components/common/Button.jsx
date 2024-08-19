const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg  transition-colors duration-300
        bg-background text-secondary hover:bg-secondary hover:text-background
        `}
    >
      {children}
    </button>
  )
}

export default Button
