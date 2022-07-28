import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { MENU_LIST } from "../../utils/data";

const Header = () => {
  const [navActive, setNavActive] = useState(null);

  return (
    <header className="header bg-dyode-green px-5 md:px-12 md:pt-8 md:pb-5 py-2 flex  flex-row items-center">
      <div
        data-testid="header-menu-icon"
        className="header-menu__icon md:hidden"
        onClick={() => setNavActive(!navActive)}
      >
        {navActive ? (
          <div>
            <Image
              className="invert"
              src={"/icons/menu-close.svg"}
              width={28}
              height={28}
              alt="Menu Icon"
            />
          </div>
        ) : (
          <div>
            <Image
              src={"/icons/menu.svg"}
              width={28}
              height={28}
              alt="Menu Icon"
            />
          </div>
        )}
      </div>
      <div className="header-logo ml-6 md:ml-0 grow md:grow-0 translate-y-1 md:translate-y-0 w-14 md:w-32">
        <Link href={"/"}>
          <a>
            <img src={"/logo.png"} alt="Logo" layout="responsive" />
          </a>
        </Link>
      </div>
      <div className="header-navigation grow">
        <div
          data-testid="header-nav"
          className={`nav__menu ${navActive ? "active" : ""}`}
        >
          {MENU_LIST.map((menu) => (
            <div
              onClick={() => {
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} />
            </div>
          ))}
        </div>
      </div>
      <div className="header-action flex items-center gap-5 md:w-32 justify-end">
        <div className="header-action-item">
          <Link href={"/search"}>
            <a>
              <Image
                src={"/icons/search.svg"}
                alt="Logo"
                width={20}
                height={20}
              ></Image>
            </a>
          </Link>
        </div>
        <div className="header-action-item">
          <Link href={"/account"}>
            <a>
              <Image
                src={"/icons/account.svg"}
                alt="Logo"
                width={23}
                height={23}
              ></Image>
            </a>
          </Link>
        </div>
        <div className="header-action-item">
          <Link href={"/cart"}>
            <a>
              <Image
                src={"/icons/cart.svg"}
                alt="Logo"
                width={20}
                height={20}
              ></Image>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
