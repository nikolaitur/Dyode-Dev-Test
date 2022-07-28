import Image from "next/image";
import Link from "next/link";
const CollectionItem = ({ image, imageAlt, title, href, gridSize }) => {
  href = href ? href : "/";
  gridSize = gridSize ? gridSize : "basis-1/2 md:basis-1/3";
  gridSize = gridSize.length ? gridSize : "basis-1/2 md:basis-1/3";
  image = image ? image : "/images/placeholder.png";
  return (
    <div className={`collection-item ${gridSize} px-1 md:px-3 mt-2`}>
      <Link href={href}>
        <a>
          <div className="collection-item-img relative">
            <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
          </div>
          <span className="collection-title bg-dyode-green flex items-center justify-center h-10 md:h-28 w-full font-title text-white">
            {title}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default CollectionItem;
