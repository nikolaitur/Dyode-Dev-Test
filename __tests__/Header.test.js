import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header/Header";
import { act } from "react-dom/test-utils";

test("clicking on menu icon opens mobile menu", async () => {
  const header = render(<Header />);

  const headerMenuIcon = await header.findByTestId("header-menu-icon");
  act(() => {
    headerMenuIcon.click();
  });

  const headerNav = await header.findByTestId("header-nav");
  expect(headerNav.classList).toContain("active");
});
