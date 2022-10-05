import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { AppDispatch, RootState } from "../../store";
import { setCells } from "../../store/boardSlice";
import { Cell, CellsConfig, Stated } from "./interface";
import PrintCell from "./PrintCell";

function genTable(
	boardHeight: number,
	boardWidth: number,
	livingCells: CellsConfig[]
): Cell[] {
	const cells: Cell[] = [];
	for (let i = 0; i < boardHeight * boardWidth; i++) {
		const targetX = i % boardWidth;
		const targetY = Math.floor(i / boardWidth);
		const newCell: Stated = {
			state:
				livingCells.find(({ x, y }) => {
					return targetX === x && targetY === y;
				})?.state ?? "dead",
		};
		cells.push(newCell);
	}
	return cells;
}

// #region connector
const mapStateToProps = ({ board: { width, height, cells } }: RootState) => ({
	width,
	height,
	cells,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setCells: (cells: Cell[]) => {
		dispatch(setCells(cells));
	}
})

const connector = connect(mapStateToProps, mapDispatchToProps);
// #endregion

interface BoardProps extends ConnectedProps<typeof connector> {
	cellsConfig: CellsConfig[];
}

const Board = (props: BoardProps) => {
	const { height, width, cells, cellsConfig, setCells } = props;
	const tmpCells = [...cells];
	let board: JSX.Element[] = [];

	useEffect(() => {
		setCells(genTable(height, width, cellsConfig));
	}, [width, height, cellsConfig, setCells]);

	for (let y = 0; y < height; y++) {
		board.push(
			<div className="table-row" key={`row-${y}`}>
				{tmpCells.splice(0, width).map(({ state: cellState }, x) => (
					<PrintCell
						key={`row-cell-${x}`}
						coord={{ x: x, y: y }}
						cellState={cellState}
					/>
				))}
			</div>
		);
	}

	return <div className="board">{board}</div>;
};

export default connector(Board);
