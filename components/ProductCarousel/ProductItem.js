import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ image, imageAlt, title, info, price, href }) => {
  href = href ? href : "/";
  image = image ? image : "/images/placeholder.png";
  return (
    <div className="product-item px-2 md:px-3 text-center">
      <Link href={href}>
        <a>
          <div className="product-item-image relative">
            <Image
              src={image}
              alt={imageAlt}
              layout="responsive"
              width={280}
              height={420}
              objectFit="contain"
            />
          </div>
          <div className="product-item-title">{title}</div>
          <div className="product-item-info text-xs md:text-base font-light">
            {info}
          </div>
          <div className="product-item-price text-dyode-green font-title">
            {price}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductItem;
