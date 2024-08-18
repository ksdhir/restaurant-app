const Button = ({ children, isSelected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border transition-colors duration-300 text-left ${
        isSelected
          ? 'bg-coral text-white border-coral'
          : 'bg-white text-gunmetal border-silver hover:bg-silver'
      }`}
    >
      {children}
      {/* <span className="font-semibold">{size.sizeLabel}</span> */}
    </button>
  )
}

export default Button
