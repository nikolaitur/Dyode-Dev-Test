import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Topbar from "../components/Topbar";

test("renders a topbar with correct msg for desktop", async () => {
  const TEST_MSG = "test mobile msg";
  const topBar = render(<Topbar topBarMsg={TEST_MSG} />);

  const msg = await topBar.findByTestId("desktop-msg");
  expect(msg.innerHTML).toEqual(TEST_MSG);
});

test("renders a topbar with correct msg for mobile", async () => {
  const TEST_MSG = "test mobile msg";
  const topBar = render(<Topbar topBarMsg={TEST_MSG} />);

  const msg = await topBar.findByTestId("mobile-msg");
  expect(msg.innerHTML).toEqual(TEST_MSG);
});
