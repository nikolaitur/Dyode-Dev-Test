import Head from "next/head";
import Topbar from "./Topbar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { MENU_LIST } from "../utils/data";
import { FOOTER_MENU_ITEMS } from "../utils/data";
import { SOCIAL_LINKS } from "../utils/data";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ptq4jkl.css"
        ></link>
      </Head>
      <Topbar
        topBarMsg="FREE SHIPPING ON ALL ORDERS OVER $75"
        topBarMsgMobile="Free Shipping On All Orders"
      />
      <Header menuList={MENU_LIST} />
      <main>{children}</main>
      <Footer
        footerNavItems={FOOTER_MENU_ITEMS}
        socialLinkItems={SOCIAL_LINKS}
      />
    </>
  );
}
