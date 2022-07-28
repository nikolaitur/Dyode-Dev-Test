import Link from "next/link";
import { MINUS_ICON, PLUS_ICON } from "../../utils/icons";
import { useState } from "react";
import { FOOTER_MENU_ITEMS } from "../../utils/data";

const FooterNavigation = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(-1);

  const updateActiveNavIndex = (idx) => {
    if (idx == activeNavIndex) {
      setActiveNavIndex(-1);
    } else {
      setActiveNavIndex(idx);
    }
  };

  return (
    <div className="flex flex-grow flex-wrap">
      {FOOTER_MENU_ITEMS.map((footerNavItem, idx) => (
        <div key={idx} className="footer-nav-item basis-full md:basis-1/5">
          <div
            data-testid={`nav-title-${idx}`}
            className="footer-title-wrap flex items-center justify-between"
            onClick={() => {
              updateActiveNavIndex(idx);
            }}
          >
            <div className="footer-title font-title text-white">
              {footerNavItem.linkListTitle}
            </div>
            <div className="accordion-state md:hidden">
              {activeNavIndex == idx ? MINUS_ICON : PLUS_ICON}
            </div>
          </div>
          <div
            data-testid={`nav-linklists-${idx}`}
            className={`footer-nav-linklists my-3 overflow-hidden transition-all ${
              idx == activeNavIndex ? "active" : ""
            }`}
          >
            {footerNavItem.linkLists.map((linklist, idx) => (
              <div
                key={idx}
                className="footer-nav-link text-white text-xs md:text-lg leading-7 md:leading-10"
              >
                <Link href={linklist.href}>
                  <a>
                    <span>{linklist.text}</span>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterNavigation;
