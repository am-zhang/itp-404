import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

test("loads and displays h1", async () => {
  const { getByTestId } = render(<About url="/" />);
  expect(getByTestId("heading-name")).toHaveTextContent("About");
});
