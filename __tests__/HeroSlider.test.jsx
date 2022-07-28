import "../utils/matchMedia.mock";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSlider from "../components/Hero/HeroSlider";

test("slick slider initialized on hero slider", async () => {
  const hero = render(<HeroSlider />);
  const heroSlider = await hero.findByTestId("hero-slider");
  expect(heroSlider.firstChild.classList.contains("slick-initialized")).toBe(
    true
  );
});
