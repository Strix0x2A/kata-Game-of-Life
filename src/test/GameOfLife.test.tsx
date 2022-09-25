import { render, screen } from "@testing-library/react";
import GameOfLife from "../components/GameOfLife/GameOfLife";

test("renders GameOfLife as a wrapper", () => {
	render(<GameOfLife />);
	const linkElement = screen.getByText(/Incoming Board .../i);
	expect(linkElement).toBeInTheDocument();
});

test("renders GameOfLife correct number of rows", () => {
	const { container } = render(<GameOfLife />);
	const linkElement = container.getElementsByClassName(`table-row`);
	expect(linkElement.length).toBe(2);
});

test("renders GameOfLife correct number of cells", () => {
	const { container } = render(<GameOfLife />);
	const linkElement = container.getElementsByClassName(`table-cell`);
	expect(linkElement.length).toBe(6);
});