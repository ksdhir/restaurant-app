const ItemInfoList = ({ title, data }) => {
  function displayAllergen(string) {
    return string
      .split(',')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(', ')
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="border-2 border-secondary rounded-lg p-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <span className="font-semibold">{item.label}</span>
            <span>{item.value ? displayAllergen(item.value) : 'N/A'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemInfoList
