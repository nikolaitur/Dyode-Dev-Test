import Slider from "react-slick";
import { NEXT_ARROW, PREV_ARROW } from "../../utils/icons";
import ProductItem from "./ProductItem";

const ProductsCarousel = ({ productItems = [], title = "" }) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: NEXT_ARROW,
    prevArrow: PREV_ARROW,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container products-slider-container mt-4 md:mt-12 mb-8 md:mb-16">
      <div className="section-title font-title text-center">{title}</div>
      <div className="products-slider">
        <Slider {...settings}>
          {productItems.map((productItem, idx) => (
            <ProductItem key={idx} {...productItem} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsCarousel;
