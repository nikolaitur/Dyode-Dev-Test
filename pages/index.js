import Head from "next/head";
import HeroSlider from "../components/Hero/HeroSlider";
import CollectionGrid from "../components/Collections/CollectionGrid";
import ProductsCarousel from "../components/ProductCarousel/ProductsCarousel";
import NewsletterForm from "../components/NewsletterForm";
import HeroSlideItem from "../components/Hero/HeroSlideItem";
import { SECONDARY_HERO } from "../utils/data";
import { HERO_SLIDER_ITEMS } from "../utils/data";
import { COLLECTION_ITEMS } from "../utils/data";
import { PRODUCT_ITEMS } from "../utils/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dyode Test</title>
        <meta name="description" content="Dyode developer test" />
      </Head>

      <main>
        <HeroSlider heroSliderItems={HERO_SLIDER_ITEMS} />
        <CollectionGrid collectionItems={COLLECTION_ITEMS} />
        <ProductsCarousel title="New Arrivals" productItems={PRODUCT_ITEMS} />
        <HeroSlideItem {...SECONDARY_HERO} />
        <NewsletterForm />
      </main>
    </div>
  );
}
