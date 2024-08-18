const Button = ({
  children,
  onClick,
  backgroundColor,
  color
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border transition-colors duration-300 
        bg-${backgroundColor} 
        
        text-${color}
        `}
    >
      {children} {color}
      {/* <span className="font-semibold">{size.sizeLabel}</span> */}
    </button>
  )
}

// ${
//   isSelected
//   ? 'bg-coral text-white border-coral'
//   : 'bg-white text-gunmetal border-silver hover:bg-silver'
// }

export default Button
