import { FACEBOOK, INSTAGRAM } from "./icons";

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

export const PRODUCT_ITEMS = [
  {
    image: "/images/product_image.png",
    imageAlt: "Product Image",
    title: "Product Title",
    info: "WOMEN’S T-SHIRT",
    price: "$19.99",
  },
  {
    image: "/images/product_image.png",
    imageAlt: "Product Image",
    title: "Product Title",
    info: "WOMEN’S T-SHIRT",
    price: "$19.99",
  },
  {
    image: "/images/product_image.png",
    imageAlt: "Product Image",
    title: "Product Title",
    info: "WOMEN’S T-SHIRT",
    price: "$19.99",
  },
  {
    image: "/images/product_image.png",
    imageAlt: "Product Image",
    title: "Product Title",
    info: "WOMEN’S T-SHIRT",
    price: "$19.99",
  },
  {
    image: "/images/product_image.png",
    imageAlt: "Product Image",
    title: "Product Title",
    info: "WOMEN’S T-SHIRT",
    price: "$19.99",
  },
];

export const SECONDARY_HERO = {
  bgImage: "/images/hero_4.png",
  bgImageMobile: "/images/hero_4_mob.png",
  href: "/",
  title: "Our Favorite Tees",
  subtitle: "Everyday tees you need!",
  btnText: "Shop Now",
  bgImageAlt: "Women's image",
  textPrimaryColor: false,
  contentPosition: "top-right",
};

export const FOOTER_MENU_ITEMS = [
  {
    linkListTitle: "Customer Service",
    linkLists: [
      {
        text: "Accessibility",
        href: "/",
      },
      {
        text: "Contact Us",
        href: "/",
      },
      {
        text: "Return Policy",
        href: "/",
      },
      {
        text: "FAQ",
        href: "/",
      },
      {
        text: "Gift Certificates",
        href: "/",
      },
      {
        text: "Wishlist",
        href: "/",
      },
    ],
  },
  {
    linkListTitle: "Company",
    linkLists: [
      {
        text: "About Us",
        href: "/",
      },
      {
        text: "Careers",
        href: "/",
      },
      {
        text: "Press",
        href: "/",
      },
      {
        text: "Affiliates",
        href: "/",
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    content: FACEBOOK,
    href: "https://facebook/dyode",
  },
  {
    name: "Instagram",
    content: INSTAGRAM,
    href: "https://instagram/dyode",
  },
];
