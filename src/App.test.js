import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("botton has correct initial color", () => {
  render(<App />);
  //find an element with a rile of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ background: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ background: "blue" });

  //expext the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});
