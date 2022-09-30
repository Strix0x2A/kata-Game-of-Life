interface CellProps {
	zoom: number;
	state: "living" | "dead";
}

const Cell = (props: CellProps) => {
	const { zoom, state } = props;
	return (
		<div
			className={`table-cell ${state}`}
			style={{
				width: zoom,
				height: zoom,
			}}
		>
		</div>
	)
}

export default Cell;