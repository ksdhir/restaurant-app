import Image from 'next/image'

const ItemPrimary = ({ imageUrl, itemName }) => {
  return (
    <div className="bg-primary border-2 border-secondary rounded-lg flex flex-row justify-center items-center h-full w-full">
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] lg:w-[600px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default ItemPrimary
