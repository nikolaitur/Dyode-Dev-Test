import FooterNavigation from "./FooterNavigation";
import SocialLinks from "./SocialLinks";

const Footer = ({ footerNavItems = [], socialLinkItems = [] }) => {
  return (
    <footer className="bg-black pt-4 pb-6 md:py-16 ">
      <div className="container flex flex-wrap justify-start">
        <FooterNavigation footerNavItems={footerNavItems} />
        <SocialLinks socialLinkItems={socialLinkItems} />
      </div>
    </footer>
  );
};

export default Footer;
