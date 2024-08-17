import Image from 'next/image'
import Link from 'next/link'

const Card = ({ imageUrl, name, price }) => {
  return (
    <Link href={""}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
