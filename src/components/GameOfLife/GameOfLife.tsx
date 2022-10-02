import { useState } from "react";
import Board from "./Board";
import { Cell, Coord, InitCell, Stated } from "./interface";

import "./../../css/GameOfLife.scss";

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
      state: livingCells.find(({ x, y }) => {
        return targetX === x && targetY === y;
      })
        ? "living"
        : "dead",
    };
    cells.push(newCell);
  }
  return cells;
}

const GameOfLife = () => {
  // Initialisation
  const boardHeight = 10;
  const boardWidth = 10;
  const introduction =
    "This application is based on simple rules. A cell is either dead or alive according to the number of neighbours it had in the previous generation. To add a little flavour, living cell have a different colour depending on her stage : was it alive the previous generation ?";

  // Stated functional component
  const livingCells: InitCell[] = [{ state: "living", x: 1, y: 1 }];
  const [currentCells, setCurrentCells] = useState<Cell[]>(
    genTable(boardHeight, boardWidth, livingCells)
  );
  return (
    <div className="GameOfLife">
      <div className="describer">
        <div className="title">
          <span className="title-primary">Life </span>
          <span className="title-secondary">- Cells finding their way</span>
        </div>
        <div>{introduction}</div>
      </div>
	  {/* <Settings /> */}
      <Board height={boardHeight} width={boardWidth} cells={currentCells} />
    </div>
  );
};

export default GameOfLife;
