import { screen, render, act } from "@testing-library/react";
import { GameOfLife, Grid } from "../components/GameOfLife";

// test

test("should display empty grid of 10 x 10 cells", async () => {
	const { container } = render(<GameOfLife grid={new Grid()} />);
	const cells = container.getElementsByClassName("cell");
	expect(cells).toHaveLength(100);
});

test("should display empty grid of 5 x 5 cells", async () => {
	const { container } = render(<GameOfLife grid={new Grid(5,5)} />);
	const cells = container.getElementsByClassName("cell");
	expect(cells).toHaveLength(25);
});

test("should activate cell", async () => {
	render(<GameOfLife grid={new Grid()} />);
	let cell = screen.getByTestId("cell-1-1");
	act(() => {
		cell.click();
	});
	cell = screen.getByTestId("cell-1-1");
	expect(cell).toHaveClass("cell alive");
});
