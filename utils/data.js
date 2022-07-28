export const MENU_LIST = [
  { text: "Men's", href: "/mens" },
  { text: "Women's", href: "/womens" },
  { text: "Accessories", href: "/accessories" },
  { text: "Sale!", href: "/sale" },
];

export const HERO_SLIDER_ITEMS = [
  {
    bgImage: "/images/hero_bg.png",
    bgimageMobile: "/images/hero_bg_mob.png",
    href: "/",
    title: "Shop New Arrivals",
    subtitle: "Our coolest new items are waiting for you!",
    btnText: "Shop Now",
    bgImageAlt: "Man and Woman",
    textPrimaryColor: true,
    contentPosition: "middle-left",
  },
  {
    bgImage: "/images/hero_2.png",
    href: "/",
    title: "Our Fave Tees",
    subtitle: "Shop all of our favorites.",
    btnText: "Shop Now",
    bgImageAlt: "Tees",
    textPrimaryColor: false,
    contentPosition: "middle-left",
  },
  {
    bgImage: "/images/hero_3.png",
    href: "/",
    title: "Men’s Tees",
    subtitle: "Find the perfect shirt.",
    btnText: "Shop Now",
    bgImageAlt: "Shirts",
    textPrimaryColor: false,
    contentPosition: "middle-left",
  },
];

export const COLLECTION_ITEMS = [
  {
    image: "/images/col_man.png",
    imageAlt: "Men's image",
    title: "Men's",
    href: "/collection/men",
    gridSize: "",
  },
  {
    image: "/images/col_woman.png",
    imageAlt: "Women's image",
    title: "Women's",
    href: "/collection/women",
    gridSize: "",
  },
  {
    image: "/images/accessories.png",
    imageAlt: "Accessories",
    title: "Accessories",
    href: "/collection/accessories",
    gridSize: "basis-full md:basis-1/3",
  },
];
