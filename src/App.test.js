import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("botton has correct initial color", () => {
  render(<App />);
  //find an element with a rile of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ background: "red" });
});
test("button turn blue when clicked", () => {});
