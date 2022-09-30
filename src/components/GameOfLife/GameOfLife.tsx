import { useState } from "react";
import Board from "./Board";
import { Cell, Coord, InitCell, Stated } from "./interface";

import "./../../css/GameOfLife.css";


function genTable(
	boardHeight: number,
	boardWidth: number,
	livingCells: Coord[]
): Cell[] {
	const cells: Cell[] = [];
	for (let i = 0; i < boardHeight * boardWidth; i++) {
		const targetX = i % boardWidth;
		const targetY = Math.floor(i / boardWidth);
		const newCell: Stated = {
			state: livingCells.find(
				({ x, y }) => {
					return targetX === x && targetY === y;
				}
				) ? "living" : "dead",
			}
			cells.push(newCell);
		}
	return cells;
}

const GameOfLife = () => {
	// Initialisation
	const boardHeight = 2;
	const boardWidth = 3;

	// Stated functional component
	const livingCells: InitCell[] = [{ state: "living", x: 1, y: 1 }];
	const [currentCells, setCurrentCells] = useState<Cell[]>(
		genTable(boardHeight, boardWidth, livingCells),
	);
	return (
		<>
			Incoming Board ...
			<Board
				height={boardHeight}
				width={boardWidth}
				cells={currentCells}
			/>
		</>
	)
}

export default GameOfLife;