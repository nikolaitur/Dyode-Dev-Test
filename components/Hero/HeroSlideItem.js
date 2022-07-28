import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
const HeroSlideItem = ({
  bgImage,
  bgImageMobile,
  bgImageAlt,
  title,
  subtitle,
  btnText,
  href,
  textPrimaryColor,
  contentPosition,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  bgImage = bgImage ? bgImage : "/images/placeholder.png";
  bgImageMobile = bgImageMobile ? bgImageMobile : bgImage;
  contentPosition = contentPosition ? contentPosition : "middle-center";
  return (
    <div className="hero-slide-item relative h-full">
      <div className="hero-slide-image relative">
        <Image
          src={isMobile ? bgImageMobile : bgImage}
          alt={bgImageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={`hero-content relative md:absolute ${contentPosition} ${
          textPrimaryColor ? "text-primary" : "text-secondary"
        }`}
      >
        <div className={`hero-title text-6xl font-title`}>{title}</div>
        <div className={`hero-subtitle`}>{subtitle}</div>
        {href && btnText && btnText.length && (
          <Link href={href}>
            <a className="hero-link block tracking-widest text-sm px-5 py-3 text-white uppercase bg-black">
              {btnText}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSlideItem;
