import Slider from "react-slick";
import HeroSlideItem from "./HeroSlideItem";
import { HERO_SLIDER_ITEMS } from "../../utils/data";

const HeroSlider = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-slider-container" data-testid="hero-slider">
      <Slider {...settings}>
        {HERO_SLIDER_ITEMS.map((heroSlide, idx) => (
          <HeroSlideItem key={idx} {...heroSlide} />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
