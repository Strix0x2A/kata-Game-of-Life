import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cell, CellState, Coord } from "../components/GameOfLife/interface";

interface BoardState {
	width: number;
	height: number;
	zoom: number;
	cells: Cell[];
}

const initialState: BoardState = {
	width: 10,
	height: 10,
	zoom: 20,
	cells: [],
};

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		setCells: (state, action: PayloadAction<Cell[]>) => {
			state.cells = action.payload;
		},
		setCellState: (state, action: PayloadAction<{ coord: Coord, newState?: CellState }>) => {
			const { payload: { coord: { x, y }, newState } } = action;
			const cell = state.cells[y * state.width + x];
			if (newState !== undefined) {
				cell.state = newState;
				return ;
			}
			switch (cell.state) {
				case "newborn":
				case "living":
					cell.state = "dead";
					break;
				case "dead":
					cell.state = "newborn";
			}
		},
	},
})

export const { setCells, setCellState } = boardSlice.actions;

export default boardSlice;