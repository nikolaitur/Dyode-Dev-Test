import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import FooterNavigation from "../components/Footer/FooterNavigation";

export const FOOTER_MENU_ITEMS = [
  {
    linkListTitle: "Customer Service",
    linkLists: [
      {
        text: "Accessibility",
        href: "/",
      },
    ],
  },
  {
    linkListTitle: "Company",
    linkLists: [
      {
        text: "About Us",
        href: "/",
      },
    ],
  },
];

test("clicking on menu icon opens mobile menu", async () => {
  const footerNavigation = render(
    <FooterNavigation footerNavItems={FOOTER_MENU_ITEMS} />
  );

  const navTitle1 = await footerNavigation.findByTestId("nav-title-0");
  act(() => {
    navTitle1.click();
  });

  const navLinklists1 = await footerNavigation.findByTestId("nav-linklists-0");
  const navLinklists2 = await footerNavigation.findByTestId("nav-linklists-1");
  expect(navLinklists1.classList).toContain("active");
  expect(navLinklists2.classList.contains("active")).toBe(false);
});
