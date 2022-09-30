import { useState } from "react";

interface GameOfLifeProps {
	grid: Grid;
}

class Grid {
	readonly width: number;
	readonly height: number;
	readonly cells: boolean[][];

	constructor(width: number = 10, height: number = 10) {
		this.height = height;
		this.width = width;
		this.cells = Grid.initCells(height, width);
	}

	private static initCells(height: number, width: number): boolean[][] {
		const cells: boolean[][] = [];
		for (let i = 0; i < height; i++) {
			let line = [];
			for (let j = 0; j < width; j++) {
				line.push(false);
			}
			cells.push(line);
		}
		return cells;
	}

	makeAlive(i: number, j: number): Grid {
		this.cells[i][j] = true;
		return this;
	}

	isAlive(i: number, j: number): boolean {
		return this.cells[i][j];
	}
}

const GameOfLife = (props: GameOfLifeProps) => {
	const { width, height } = props.grid;
	const [ grid, setGrid ] = useState<Grid>(props.grid);
	let board = [];

	for (let i = 0; i < height; i++) {
		let line = [];
		for (let j = 0; j < width; j++) {
			let className = "cell";
			if (props.grid.isAlive(i,j)) {
				className += " alive";
			}
			line.push(<div key={`cell-${i}-${j}`} className={className} data-testid={`cell-${i}-${j}`} onClick={() => setGrid(grid.makeAlive(i, j))}></div>);
		}
		board.push(<div key={`${i}`} className="line">{line}</div>);
	}

	return (
		<>
			{board}
		</>
	)
}

export { GameOfLife, Grid };