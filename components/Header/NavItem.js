import Link from "next/link";
const NavItem = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="nav__item pt-2 md:pt-0 block text-white uppercase text-lg md:text-xl font-medium tracking-widest">
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
