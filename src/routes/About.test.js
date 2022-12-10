import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

test("loads and displays h1", async () => {
  render(<About url="/" />);
  await screen.findByRole("heading");
});
