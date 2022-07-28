import Head from "next/head";
import Topbar from "../components/Topbar";
import Header from "../components/Header/Header";
import HeroSlider from "../components/Hero/HeroSlider";
import CollectionGrid from "../components/Collections/CollectionGrid";
import ProductsCarousel from "../components/ProductCarousel/ProductsCarousel";
import NewsletterForm from "../components/NewsletterForm";
import HeroSlideItem from "../components/Hero/HeroSlideItem";
import Footer from "../components/Footer/Footer";
import { SECONDARY_HERO } from "../utils/data";
import { MENU_LIST } from "../utils/data";
import { HERO_SLIDER_ITEMS } from "../utils/data";
import { COLLECTION_ITEMS } from "../utils/data";
import { PRODUCT_ITEMS } from "../utils/data";
import { FOOTER_MENU_ITEMS } from "../utils/data";
import { SOCIAL_LINKS } from "../utils/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dyode Test</title>
        <meta name="description" content="Dyode developer test" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ptq4jkl.css"
        ></link>
      </Head>

      <main>
        <Topbar
          topBarMsg="FREE SHIPPING ON ALL ORDERS OVER $75"
          topBarMsgMobile="Free Shipping On All Orders"
        />
        <Header menuList={MENU_LIST} />
        <HeroSlider heroSliderItems={HERO_SLIDER_ITEMS} />
        <CollectionGrid collectionItems={COLLECTION_ITEMS} />
        <ProductsCarousel title="New Arrivals" productItems={PRODUCT_ITEMS} />
        <HeroSlideItem {...SECONDARY_HERO} />
        <NewsletterForm />
        <Footer
          footerNavItems={FOOTER_MENU_ITEMS}
          socialLinkItems={SOCIAL_LINKS}
        />
      </main>
    </div>
  );
}
