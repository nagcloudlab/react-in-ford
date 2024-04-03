import React from "react";
import { render, screen } from "@testing-library/react";
import { keyboardKey } from "@testing-library/user-event";
import App from "./App";

test("renders correctly", () => {
  render(<App />); // v-dom -> browser-dom -> screen
  const element = screen.getByText(/learn react/i);
  expect(element).toBeInTheDocument();
});
