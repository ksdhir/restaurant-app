import Image from 'next/image'
import Link from 'next/link'

const Card = ({ imageUrl, name, itemId }) => {
  const slug = name.toLowerCase().replace(/\s/g, '-') + `-${itemId}`
  return (
    <Link href={`/items/${slug}`}>
      <div className="bg-white shadow-md shadow-silver rounded-lg overflow-hidden hover:shadow-lg hover:shadow-silver transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gunmetal">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
