const ItemInfoList = ({ title, data }) => {
  return (
    <>
      <h2 className="text-2xl text-gunmetal font-semibold mb-2">{title}</h2>
      <div className="border rounded-lg p-4 shadow-md shadow-silver space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <span className="font-semibold text-gunmetal">{item.label}</span>
            <span className="text-gunmetal">
              {item.value ? item.value : 'N/A'}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemInfoList
