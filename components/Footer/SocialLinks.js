import { SOCIAL_LINKS } from "../../utils/data";

const SocialLinks = () => {
  return (
    <div className="social-links-wrap basis-full md:basis-1/6">
      <div className="title font-title footer-title text-white">Follow Us</div>
      <div className="social-links mt-3 md:mt-5 flex items-center justify-start gap-10 md:gap-12">
        {SOCIAL_LINKS.map((link, idx) => (
          <a href={link.href} key={idx} className="socil-llink-item">
            {link.content}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
