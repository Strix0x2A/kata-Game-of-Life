import { render, screen } from "@testing-library/react";
import App from "../App";


test("renders App Header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kata - React Typescript - Game of Life/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders App Footer", () => {
  render(<App />);
  const linkElement = screen.getByText(/Clémence BERGON/i);
  expect(linkElement).toBeInTheDocument();
});