import Head from "next/head";
import Topbar from "../components/Topbar";
import Header from "../components/Header/Header";
import HeroSlider from "../components/Hero/HeroSlider";

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
        <Header />
        <HeroSlider />
      </main>
    </div>
  );
}
