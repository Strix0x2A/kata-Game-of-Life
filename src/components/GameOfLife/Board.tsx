import PrintCell from "./Cell";
import { Cell } from "./interface";

interface BoardProps {
	height: number;
	width: number;
	cells: Cell[];
}

const Board = (props: BoardProps) => {
	const { height, width, cells } = props;
	const tmpCells = [ ...cells];
	let board: JSX.Element[] = [];

	for (let y = 0; y < height; y++) {
		board.push(
			<div className="table-row" key={`row-${y}`}>
				{tmpCells.splice(0, width).map(
					(cell, x) =>
						<PrintCell
							key={`row-cell-${x}`}
							zoom={20}
							state={cell.state}
						/>
				)}
			</div>
		)
	}

	return <div className="board">{board}</div>;
}

export default Board;