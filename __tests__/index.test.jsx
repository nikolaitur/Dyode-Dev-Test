import "../utils/matchMedia.mock";
import { render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
