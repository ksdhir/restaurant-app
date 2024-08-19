const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border transition-colors duration-300`}
    >
      {children}
    </button>
  )
}

export default Button
