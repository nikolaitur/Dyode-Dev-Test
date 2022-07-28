import FooterNavigation from "./FooterNavigation";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-black pt-4 pb-6 md:py-16 ">
      <div className="container flex flex-wrap justify-start">
        <FooterNavigation />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
