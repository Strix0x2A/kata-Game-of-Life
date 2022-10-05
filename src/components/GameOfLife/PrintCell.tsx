import { connect, ConnectedProps } from "react-redux";

import { AppDispatch, RootState } from "../../store";
import { setCellState } from "../../store/boardSlice";
import { CellState, Coord } from "./interface";

// #region connector
const mapStateToProps = ({ board: { zoom } }: RootState) => ({ zoom });
const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setCellState: (coord: Coord) => {
		dispatch(setCellState({coord}));
	}
})

const connector = connect(mapStateToProps, mapDispatchToProps);
// #endregion

interface PrintCellProps extends ConnectedProps<typeof connector> {
	coord: Coord;
	cellState: CellState;
}

const PrintCell = (props: PrintCellProps) => {
	const { coord, zoom, cellState, setCellState } = props;

	return (
		<div
			className={`table-cell ${cellState}`}
			onClick={() => setCellState(coord)}
			style={{
				width: zoom,
				height: zoom,
			}}
		>
		</div>
	)
}

export default connector(PrintCell);